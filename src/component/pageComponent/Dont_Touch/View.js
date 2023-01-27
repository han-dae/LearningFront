import React, { Component } from 'react';
import Heart1 from "../../img/heart.png";
import Heart0 from "../../img/heart0.png";

class View extends Component {
    constructor(props) {
        super(props)
        this.state = {

            data: ["fefe","fewf"],
            date: "",
            none_like: {Heart0},
            like: {Heart1}
        }
    }


    componentWillMount() {
        const { none_like } = this.state;

        <div className='other_div'>
            <div> {/* left empty*/}</div>
            <div className='Like'>
                <img src={none_like} />
                <h5> like </h5>
            </div>
            <div>{/* right empty*/}</div>
        </div>
    }
_toggleLike = async function(){
    alert('좋아요 버튼 클릭');
}
    render() {
        const { data, date, none_like } = this.state;

        return (
            <div>
                <div id='contents_div'
                    dangerouslySetInnerHTML={{ __html: data.data[0].contents_div }}
                >


                    <div className='other_div'>
                        <div>{/*left empty*/}</div>
                        <div className='Like'>
                            <img src={none_like} onClick={() => this._toggleLike()}/>
                            <h5> 좋아요 </h5>
                        </div>
                        <div> {} </div>
                    </div>
                </div>
                : null
            </div>
        );
    }
}
export default View;
