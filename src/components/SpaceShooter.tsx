import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Star, Award, Heart, Maximize2, Minimize2 } from 'lucide-react';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Enemy extends GameObject {
  speed: number;
  health: number;
}

interface PowerUp extends GameObject {
  type: 'life' | 'autoShoot';
  speed: number;
}

interface Bullet extends GameObject {
  speed: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

const SpaceShooter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(200);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoShootActive, setAutoShootActive] = useState(false);
  const [autoShootTimer, setAutoShootTimer] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const playerRef = useRef<GameObject>({
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  });

  const gameStateRef = useRef({
    enemies: [] as Enemy[],
    bullets: [] as Bullet[],
    powerUps: [] as PowerUp[],
    particles: [] as Particle[],
    lastEnemySpawn: 0,
    lastPowerUpSpawn: 0,
    lastAutoShot: 0,
    enemySpawnInterval: 1200,
    powerUpSpawnInterval: 10000,
    autoShootInterval: 200,
    animationFrameId: 0,
  });

  useEffect(() => {
    const savedHighScore = localStorage.getItem('spaceShooterHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }

    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.clientWidth;
        const containerHeight = isFullscreen 
          ? window.innerHeight 
          : Math.min(window.innerHeight * 0.6, 600);

        canvasRef.current.width = containerWidth;
        canvasRef.current.height = containerHeight;

        if (playerRef.current) {
          playerRef.current.y = containerHeight - 70;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (autoShootTimer) clearTimeout(autoShootTimer);
    };
  }, [isFullscreen]);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.error('Fullscreen error:', err);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const createParticles = (x: number, y: number, color: string) => {
    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const speed = 2 + Math.random() * 2;
      gameStateRef.current.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 3,
        color,
        life: 1,
        maxLife: 1,
      });
    }
  };

  const updateParticles = (context: CanvasRenderingContext2D) => {
    gameStateRef.current.particles = gameStateRef.current.particles.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 0.02;

      if (particle.life <= 0) return false;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
      context.fillStyle = particle.color + Math.floor(particle.life * 255).toString(16).padStart(2, '0');
      context.fill();
      context.closePath();

      return true;
    });
  };

  const resetGame = () => {
    if (gameStateRef.current.animationFrameId) {
      cancelAnimationFrame(gameStateRef.current.animationFrameId);
    }

    if (autoShootTimer) {
      clearTimeout(autoShootTimer);
      setAutoShootTimer(null);
    }

    setScore(0);
    setLives(3);
    setGameOver(false);
    setIsPlaying(false);
    setAutoShootActive(false);

    gameStateRef.current = {
      ...gameStateRef.current,
      enemies: [],
      bullets: [],
      powerUps: [],
      particles: [],
      lastEnemySpawn: 0,
      lastPowerUpSpawn: 0,
      lastAutoShot: 0,
      animationFrameId: 0,
    };

    if (canvasRef.current) {
      playerRef.current = {
        x: canvasRef.current.width / 2 - 25,
        y: canvasRef.current.height - 70,
        width: 50,
        height: 50,
      };

      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  };

  const startGame = () => {
    if (!canvasRef.current) return;

    resetGame();
    setIsPlaying(true);
    setGameOver(false);
    setLives(3);
    setScore(0);
    gameLoop();
  };

  const spawnPowerUp = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const type = Math.random() > 0.5 ? 'life' : 'autoShoot';
    
    gameStateRef.current.powerUps.push({
      x: Math.random() * (canvas.width - 30),
      y: -30,
      width: 30,
      height: 30,
      type,
      speed: 2,
    });
  };

  const handlePowerUp = (powerUp: PowerUp) => {
    if (powerUp.type === 'life' && lives < 5) {
      setLives(prev => prev + 1);
    } else if (powerUp.type === 'autoShoot') {
      setAutoShootActive(true);
      if (autoShootTimer) clearTimeout(autoShootTimer);
      setAutoShootTimer(window.setTimeout(() => {
        setAutoShootActive(false);
      }, 10000));
    }
  };

  const gameLoop = () => {
    if (!canvasRef.current || gameOver) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (autoShootActive && Date.now() - gameStateRef.current.lastAutoShot > gameStateRef.current.autoShootInterval) {
      shoot();
      gameStateRef.current.lastAutoShot = Date.now();
    }

    if (Date.now() - gameStateRef.current.lastEnemySpawn > gameStateRef.current.enemySpawnInterval) {
      spawnEnemy();
      gameStateRef.current.lastEnemySpawn = Date.now();
    }

    if (Date.now() - gameStateRef.current.lastPowerUpSpawn > gameStateRef.current.powerUpSpawnInterval) {
      spawnPowerUp();
      gameStateRef.current.lastPowerUpSpawn = Date.now();
    }

    gameStateRef.current.bullets = gameStateRef.current.bullets.filter(bullet => {
      bullet.y -= bullet.speed;
      drawBullet(context, bullet);
      return bullet.y > -bullet.height;
    });

    gameStateRef.current.powerUps = gameStateRef.current.powerUps.filter(powerUp => {
      powerUp.y += powerUp.speed;
      drawPowerUp(context, powerUp);

      if (checkCollision(powerUp, playerRef.current)) {
        handlePowerUp(powerUp);
        return false;
      }

      return powerUp.y < canvas.height;
    });

    gameStateRef.current.enemies = gameStateRef.current.enemies.filter(enemy => {
      enemy.y += enemy.speed;
      drawEnemy(context, enemy);

      for (let i = gameStateRef.current.bullets.length - 1; i >= 0; i--) {
        const bullet = gameStateRef.current.bullets[i];
        if (checkCollision(bullet, enemy)) {
          gameStateRef.current.bullets.splice(i, 1);
          enemy.health--;

          createParticles(
            enemy.x + enemy.width / 2,
            enemy.y + enemy.height / 2,
            enemy.health <= 0 ? '#ef4444' : '#fca5a5'
          );

          if (enemy.health <= 0) {
            setScore(prev => prev + 10);
            return false;
          }
          break;
        }
      }

      if (checkCollision(enemy, playerRef.current)) {
        setLives(prev => {
          if (prev - 1 <= 0) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
        createParticles(
          enemy.x + enemy.width / 2,
          enemy.y + enemy.height / 2,
          '#ef4444'
        );
        return false;
      }

      return enemy.y < canvas.height;
    });

    updateParticles(context);
    drawPlayer(context);
    gameStateRef.current.animationFrameId = requestAnimationFrame(gameLoop);
  };

  const spawnEnemy = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    gameStateRef.current.enemies.push({
      x: Math.random() * (canvas.width - 40),
      y: -40,
      width: 40,
      height: 40,
      speed: 1.5 + Math.random(),
      health: 1,
    });
  };

  const shoot = () => {
    if (!isPlaying) return;

    gameStateRef.current.bullets.push({
      x: playerRef.current.x + playerRef.current.width / 2 - 3,
      y: playerRef.current.y,
      width: 6,
      height: 15,
      speed: 8,
    });
  };

  const movePlayer = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !isPlaying) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    let x;
    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
    } else {
      x = e.clientX - rect.left;
    }
    
    playerRef.current.x = Math.max(0, Math.min(x - playerRef.current.width / 2, 
      canvas.width - playerRef.current.width));
  };

  const drawPlayer = (context: CanvasRenderingContext2D) => {
    context.fillStyle = '#3B82F6';
    context.beginPath();
    context.moveTo(playerRef.current.x + playerRef.current.width / 2, playerRef.current.y);
    context.lineTo(playerRef.current.x + playerRef.current.width, playerRef.current.y + playerRef.current.height);
    context.lineTo(playerRef.current.x, playerRef.current.y + playerRef.current.height);
    context.closePath();
    context.fill();

    if (autoShootActive) {
      context.strokeStyle = '#10B981';
      context.lineWidth = 2;
      context.beginPath();
      context.arc(
        playerRef.current.x + playerRef.current.width / 2,
        playerRef.current.y + playerRef.current.height / 2,
        playerRef.current.width * 0.8,
        0,
        Math.PI * 2
      );
      context.stroke();
    }
  };

  const drawEnemy = (context: CanvasRenderingContext2D, enemy: Enemy) => {
    context.fillStyle = '#ef4444';
    context.beginPath();
    context.moveTo(enemy.x + enemy.width / 2, enemy.y);
    context.lineTo(enemy.x + enemy.width, enemy.y + enemy.height);
    context.lineTo(enemy.x, enemy.y + enemy.height);
    context.closePath();
    context.fill();
  };

  const drawPowerUp = (context: CanvasRenderingContext2D, powerUp: PowerUp) => {
    context.fillStyle = powerUp.type === 'life' ? '#EC4899' : '#10B981';
    context.beginPath();
    context.arc(
      powerUp.x + powerUp.width / 2,
      powerUp.y + powerUp.height / 2,
      powerUp.width / 2,
      0,
      Math.PI * 2
    );
    context.fill();
  };

  const drawBullet = (context: CanvasRenderingContext2D, bullet: Bullet) => {
    context.fillStyle = '#10B981';
    context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
  };

  const checkCollision = (obj1: GameObject, obj2: GameObject) => {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
  };

  const endGame = () => {
    setGameOver(true);
    setIsPlaying(false);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('spaceShooterHighScore', score.toString());
    }
    if (gameStateRef.current.animationFrameId) {
      cancelAnimationFrame(gameStateRef.current.animationFrameId);
    }
    if (autoShootTimer) {
      clearTimeout(autoShootTimer);
      setAutoShootTimer(null);
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Space <span className="text-blue-500">Defender</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2 text-white">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Score: {score}</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              {[...Array(lives)].map((_, i) => (
                <Heart key={i} className="h-5 w-5 text-red-500 fill-red-500" />
              ))}
            </div>
            <div className="flex items-center gap-2 text-white">
              <Award className="h-5 w-5 text-blue-500" />
              <span>High Score: {highScore}</span>
            </div>
          </div>

          <div 
            ref={containerRef}
            className={`relative bg-gray-800 rounded-xl overflow-hidden ${
              isFullscreen ? 'fixed inset-0 z-50' : ''
            }`}
          >
            <canvas
              ref={canvasRef}
              onMouseMove={movePlayer}
              onTouchMove={movePlayer}
              onClick={shoot}
              onTouchStart={shoot}
              className="w-full h-full cursor-crosshair touch-none"
            />

            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-gray-800/80 p-2 rounded-lg 
                       text-white hover:bg-gray-700/80 transition-colors"
            >
              {isFullscreen ? (
                <Minimize2 className="h-6 w-6" />
              ) : (
                <Maximize2 className="h-6 w-6" />
              )}
            </button>

            {(!isPlaying || gameOver) && (
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
                <div className="text-center">
                  {gameOver ? (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-4">Game Over!</h3>
                      <p className="text-gray-400 mb-6">Final Score: {score}</p>
                      <button
                        onClick={startGame}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg
                                 flex items-center gap-2 mx-auto transition-all transform hover:scale-105 duration-300"
                      >
                        <Rocket className="h-5 w-5" />
                        Play Again
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={startGame}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg
                               flex items-center gap-2 mx-auto transition-all transform hover:scale-105 duration-300"
                    >
                      <Rocket className="h-5 w-5" />
                      Start Game
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {!isFullscreen && (
            <div className="mt-8 text-center text-gray-400">
              <p className="mb-2">How to play:</p>
              <p>Move your mouse/finger to control the ship</p>
              <p>Click/tap to shoot the enemies</p>
              <p className="mt-2">Power-ups:</p>
              <p><span className="text-pink-500">●</span> Extra Life</p>
              <p><span className="text-emerald-500">●</span> Auto-shoot (10 seconds)</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpaceShooter;