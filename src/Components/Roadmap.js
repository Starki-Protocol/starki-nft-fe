import "../App.css";

const Roadmap = () => {
  return (
    <>
      <div name="roadmap" className="roadmap-container">
        <div className="roadmap-left">
          <div className="roadmap-item-container">
            <div className="roadmap-item">
              MILESTONE
              <p className="roadmap-text">Discord Bots for Starki Holders </p>
              <p className="roadmap-text">-NFT Snipe Bot for Starknet</p>
              <p className="roadmap-text">
                -Arbitrage Bot on Starknet (via Fiborous Amm)
              </p>
            </div>
            <div className="roadmap-arm" />
          </div>

          <div className="roadmap-item-container">
            <div className="roadmap-item">
              ENDGAME
              <p className="roadmap-text">Launching Starki Protocol</p>
              <p className="roadmap-text">
                (Starki is a no-loss earning protocol)
              </p>
            </div>
            <div className="roadmap-arm" />
          </div>
        </div>
        <div className="roadmap-divider"></div>
        <div className="roadmap-right">
          <div className="roadmap-item-container">
            <div className="roadmap-arm" />
            <div className="roadmap-item">
              GENESIS
              <p className="roadmap-text">NFT Launch</p>
              <p className="roadmap-text">
                - 559 unique Starki minted succesfully by our great community
              </p>
            </div>
          </div>
          <div className="roadmap-item-container">
            <div className="roadmap-arm" />
            <div className="roadmap-item">
              GIRD UP ONE'S LOINS
              <p className="roadmap-text">-Migrating Starkis to Cairo 1.0</p>
              <p className="roadmap-text">-Rewrite protocol in Cairo 1.0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
