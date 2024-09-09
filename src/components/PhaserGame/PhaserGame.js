// src/components/PhaserGame.js
const PhaserGame = () => {
    return (
        <div className="relative w-full h-full">
            <iframe
                src="https://bytejutsu.github.io/platformer/"
                className="absolute inset-0 w-full h-full"
                title="Phaser Game"
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default PhaserGame;
