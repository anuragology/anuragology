import React, { useState, useEffect } from 'react';
import { 
  Code2, Database, Globe, Layout, 
  Cpu, Cloud, Server, Shield,
} from 'lucide-react';

interface Card {
  id: number;
  icon: React.ElementType;
  isFlipped: boolean;
  isMatched: boolean;
}

const PuzzleGame = () => {
  const icons = [Code2, Database, Globe, Layout, Cpu, Cloud, Server, Shield];
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [isWon, setIsWon] = useState<boolean>(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const duplicatedIcons = [...icons, ...icons];
    const shuffledCards = duplicatedIcons
      .map((Icon, index) => ({
        id: index,
        icon: Icon,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
    setIsWon(false);
  };

  const handleCardClick = (cardId: number) => {
    if (
      flippedCards.length === 2 || 
      flippedCards.includes(cardId) || 
      cards[cardId].isMatched
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      const [firstCard, secondCard] = newFlippedCards;
      
      if (cards[firstCard].icon === cards[secondCard].icon) {
        setCards(prev => prev.map(card => 
          card.id === firstCard || card.id === secondCard
            ? { ...card, isMatched: true }
            : card
        ));
        setMatches(prev => {
          const newMatches = prev + 1;
          if (newMatches === icons.length) {
            setIsWon(true);
          }
          return newMatches;
        });
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Tech Memory <span className="text-blue-500">Game</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="text-white">
              <span className="text-gray-400">Moves: </span>
              <span className="font-bold">{moves}</span>
            </div>
            <button
              onClick={initializeGame}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg
                       transition-all transform hover:scale-105 duration-300"
            >
              Reset Game
            </button>
            <div className="text-white">
              <span className="text-gray-400">Matches: </span>
              <span className="font-bold">{matches}/{icons.length}</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {cards.map(card => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`aspect-square rounded-xl transition-all duration-300 transform 
                           ${card.isMatched || flippedCards.includes(card.id)
                             ? 'bg-blue-500 rotate-y-180'
                             : 'bg-gray-800 hover:bg-gray-700'
                           } ${card.isMatched ? 'opacity-50' : ''}`}
                disabled={card.isMatched}
              >
                {(card.isMatched || flippedCards.includes(card.id)) && (
                  <card.icon className="w-8 h-8 text-white mx-auto" />
                )}
              </button>
            ))}
          </div>

          {isWon && (
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎉 Congratulations! 🎉
              </h3>
              <p className="text-gray-400 mb-4">
                You completed the game in {moves} moves!
              </p>
              <button
                onClick={initializeGame}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg
                         transition-all transform hover:scale-105 duration-300"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PuzzleGame;