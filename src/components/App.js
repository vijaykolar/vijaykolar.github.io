import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='banner-image'>
                    <img className='banner-image__img' src='https://media.licdn.com/media/AAEAAQAAAAAAAArlAAAAJDUwM2Q5NzZmLTE2ODAtNDExMC04N2E2LTY4MmYwZTdjODM3Mg.jpg' alt='Banner Image'/>

                </div>

                <div className='main-content'>

                    <div className='profile-image'>
                        <img className='profile-image__img' alt='Vijay Kolar' src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAwNAAAAJGRlODA2NGQ0LTE1ODEtNGE0My05ZmQxLWE5ODg5YjBmMDcwOA.jpg'/>
                    </div>
                    <div className='profile-info'>
                        <h4 className='profile-info__title'>UI Developer at Lollypop UI/UX Studio </h4>
                        <a href='https://www.lollypop.biz' target='blank'> Lollypop UI/UX Studio </a>
                        <h4 className='profile-info__clg'>SDM College of Engineering &amp; Technology, Dharwad</h4>
                    </div>
                    <ul className='social'>
                        <li className='social__list'><a className='social__link' href='https://twitter.com/vijay_kolar'>Twitter</a></li>
                        <li className='social__list'><a className='social__link' href='https://github.com/vijaykolar'>Github</a></li>
                        <li className='social__list'><a className='social__link' href='https://www.behance.net/vijaykolar'>Behance</a></li>
                        <li className='social__list'><a className='social__link' href='https://in.linkedin.com/in/kolarvijay'>LinkedIn</a></li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default App;
