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
            <h2>Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Trading Bot</h3>
                    <img src={tradingBot} alt="Aave Landing Page" />
                    <p>An arbitrage trading bot on the Ethereum blockchain, its a software program that leverages price discrepancies across different decentralized exchanges (DEXs) to generate profits for its users. The bot can constantly monitor the prices of specific tokens on different DEXs, and when it detects a price discrepancy, it can automatically buy the token on the lower-priced exchange and sell it on the higher-priced exchange to capture the price difference as profit.
                    </p>

                    
                    <a href="https://github.com/DevThreePoint0/Trading-Bot-Hardhat" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Decentralized Cryptocurrency Exchange</h3>
                    <img src={portfolioSite} alt="Uniswap Swap Page" />
                    <p>A decentralized cryptocurrency exchange that allows users to trade cryptocurrencies without the need for a centralized authority or intermediary. Unlike traditional exchanges, which rely on a central authority to manage transactions, my decentralized exchange uses blockchain technology to facilitate peer-to-peer trades.
                    </p>

                    <a href="https://silent-base-3135.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/DevThreePoint0/Decentralized-Cryptocurrency-Exchange" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Non-Fungible Token Project</h3>
                    <img src={nft} alt="Compound Landing Page" />
                    <p>A NFT digital asset project that involves the creation and trading of non-fungible tokens (NFTs) on a blockchain network. NFTs are unique and indivisible digital tokens that are created on a blockchain, which means that they cannot be replicated or duplicated. ETA 4/17/23
                    </p>

                    <a href="https://st4.depositphotos.com/1006832/20098/i/450/depositphotos_200986760-stock-photo-coming-soon-red-text-white.jpg" target="_blank" className="button">Site</a>
                    <a href="https://github.com/DevThreePoint0/Non-Fungible-Token-Project" target="_blank" className="button">Code</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;
