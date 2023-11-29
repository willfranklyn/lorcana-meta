import './TierList.css';
import amber from '../ink/amber.svg';
import amethyst from '../ink/amethyst.svg';
import emerald from '../ink/emerald.svg';
import ruby from '../ink/ruby.svg';
import sapphire from '../ink/sapphire.svg';
import steel from '../ink/steel.svg';

function TierList() {
    return (
        <div className='tierlist'>
            <h1>Tier List</h1>
            <p>This tier list is automatically updated based on recent tournament results.</p>
            <div className='tier'>
                <h2>Tier 1</h2>
                <div className='tierContent'>
                    <div className='deck'>
                        <h3>Amber Steel Songs</h3>
                        <div className='ink'>
                            <img src={amber} alt='amber ink icon' className='inkLeft'/>
                            <img src={steel} alt='steel ink icon' className='inkRight'/>
                        </div>
                    </div>
                    <div className='deck'>
                        <h3>Pawpsicle Control</h3>
                        <div className='ink'>
                            <img src={ruby} alt='ruby ink icon' className='inkLeft'/>
                            <img src={sapphire} alt='sapphire ink icon' className='inkRight'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='tier'>
                <h2>Tier 2</h2>
                <div className='tierContent'>
                    <div className='deck'>
                        <h3>Amethyst Ruby Control</h3>
                        <div className='ink'>
                            <img src={amethyst} alt='amethyst ink icon' className='inkLeft'/>
                            <img src={ruby} alt='ruby ink icon' className='inkRight'/>
                        </div>
                    </div>
                    <div className='deck'>
                        <h3>Emerald Steel Relentless</h3>
                        <div className='ink'>
                            <img src={emerald} alt='emerald ink icon' className='inkLeft'/>
                            <img src={steel} alt='steel ink icon' className='inkRight'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='tier'>
                <h2>Tier 3</h2>
                <div className='tierContent'>
                    <div className='deck'>
                        <h3>Emerald Sapphire</h3>
                        <div className='ink'>
                            <img src={emerald} alt='emerald ink icon' className='inkLeft'/>
                            <img src={sapphire} alt='sapphire ink icon' className='inkRight'/>
                        </div>
                    </div>
                    <div className='deck'>
                        <h3>Amethyst Steel Mill</h3>
                        <div className='ink'>
                            <img src={amethyst} alt='amethyst ink icon' className='inkLeft'/>
                            <img src={steel} alt='steel ink icon' className='inkRight'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TierList;