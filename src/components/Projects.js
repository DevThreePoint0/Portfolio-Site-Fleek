// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import portfolioSite from '../assets/portfolio-site.png';
import nft from '../assets/nft.png';
import tradingBot from '../assets/trading-bot.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Decentralized Cryptocurrency Exchange</h3>
                    <img src={portfolioSite} alt="Uniswap Swap Page" />
                    <p>A Decentralized Cryptocurrency Exchange ran by Sepolia and Polygon blockchains. This project is powered by smart contracts written in Solidity, Javascript, Node.js, CSS, and HTML languages.
                    </p>

                    <a href="https://silent-base-3135.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/DevThreePoint0/Decentralized-Cryptocurrency-Exchange" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Non-Fungible Token Project</h3>
                    <img src={nft} alt="Compound Landing Page" />
                    <p>A NFT project ran on the Polygon blockchain. The project is powered by smart contracts, some of the languages used in this project were Javascript, Node.js, Solidity and HTML. ETA 4/17/23
                    </p>

                    <a href="https://st4.depositphotos.com/1006832/20098/i/450/depositphotos_200986760-stock-photo-coming-soon-red-text-white.jpg" target="_blank" className="button">Site</a>
                    <a href="https://github.com/DevThreePoint0/Non-Fungible-Token-Project" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Trading Bot</h3>
                    <img src={tradingBot} alt="Aave Landing Page" />
                    <p>Arbitrage based trading bot. Buying then selling for a higher price. Arbitrage uses Solidity, Javascript and Hardhat to buy and sell across different exchanges. ETA 4/15/23
                    </p>

                    <a href="https://st4.depositphotos.com/1006832/20098/i/450/depositphotos_200986760-stock-photo-coming-soon-red-text-white.jpg" target="_blank" className="button">Site</a>
                    <a href="https://github.com/DevThreePoint0/Trading-Bot" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
