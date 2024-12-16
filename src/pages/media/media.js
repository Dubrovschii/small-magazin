import { Component } from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ArrowBack from '../../components/arrow-back/arrowback';
import ArrowUp from '../../components/arrow-up/arrowup';
class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render(){

        return(
            <div className="media">
               <div className="media-wrap">
                    <Header/>
                    
                    <Footer/>
               </div>
                    <ArrowBack />
                    <ArrowUp/>
            </div>
        )
    }
}


export default Media;