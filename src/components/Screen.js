import React, { Component } from 'react';
import useSound from 'use-sound';
import ping from "../assets/mallet2.mp3"


class Screen extends Component {
    state = {
        ping: "All know all white bare white body fixed one yard legs joined like sewn. Light heat white floor one square yard never seen. White walls one yard by two white ceiling one square yard never seen. Bare white body fixed only the eyes only just. Traces blurs light grey almost white on white. Hands hanging palms front white feet heels together right angle. Light heat white planes shining white bare white body fixed ping fixed elsewhere. Traces blurs signs no meaning light grey almost white. Bare white body fixed white on white invisible. Only the eyes only just light blue almost white. Head haught eyes light blue almost white silence within. Brief murmurs only just almost never all known. Traces blurs signs no meaning light grey almost white. Legs joined like sewn heels together right angle. Traces alone unover given black light grey almost white on white. Light heat white walls shining white one yard by two. Bare white body fixed one yard ping fixed elsewhere. Traces blurs signs no meaning light grey almost white. White feet toes joined like sewn heels together right angle invisible. Eyes alone unover given blue light blue almost white. Murmur only just almost never one second perhaps not alone. Given rose only just bare white body fixed one yard white on white invisible. All white all known murmurs only just almost never always the same all known. Light heat hands hanging palms front white on white invisible. Bare white body fixed ping fixed elsewhere. Only the eyes only just light blue almost white fixed front. Ping murmur only just almost never one second perhaps a way out. Head haught eyes light blue almost white fixed front ping murmur ping silence. Eyes holes light blue almost white mouth white seam like sewn invisible. Ping murmur perhaps a nature one second almost never that much memory almost never. White walls each its trace grey blur signs no meaning light grey almost white. Light heat all known all white planes meeting invisible. Ping murmur only just almost never one second perhaps a meaning that much memory almost never. White feet toes joined like sewn heels together right angle ping elsewhere no sound. Hands hanging palms front legs joined like sewn. Head haught eyes holes light blue almost white fixed front silence within. Ping elsewhere always there but that known not. Eyes holes light blue alone unover given blue light blue almost white only colour fixed front. All white all known white planes shining white ping murmur only just almost never one second light time that much memory almost never. Bare white body fixed one yard ping fixed elsewhere white on white invisible heart breath no sound. Only the eyes given blue light blue almost white fixed front only colour alone unover. Planes meeting invisible one only shining white infinite but that known not. Nose ears white holes mouth white seam like sewn invisible. Ping murmurs only just almost never one second always the same all known. Given rose only just bare white body fixed one yard invisible all known without within. Ping perhaps a nature one second with image same time a little less blue and white in the wind. White ceiling shining white one square yard never seen ping perhaps way out there one second ping silence. Traces alone unover given black grey blurs signs no meaning light grey almost white always the same. Ping perhaps not alone one second with image always the same same time a little less that much memory almost never ping silence. Given rose only just nails fallen white over. Long hair fallen white invisible over. White scars invisible same white as flesh torn of old given rose only just. Ping image only just almost never one second light time blue and white in the wind. Head haught nose ears white holes mouth white seam like sewn invisible over. Only the eyes given blue fixed front light blue almost white only colour alone unover. Light heat white planes shining white one only shining white infinite but that known not. Ping a nature only just almost never one second with image same time a little less blue and white in the wind. Traces blurs light grey eyes holes light blue almost white fixed front ping a meaning only just almost never ping silence. Bare white one yard fixed ping fixed elsewhere no sound legs joined like sewn heels together right angle hands hanging palms front. Head haught eyes holes light blue almost white fixed front silence within. Ping elsewhere always there but that known not. Ping perhaps not alone one second with image same time a little less dim eye black and white half closed long lashes imploring that much memory almost never. Afar flash of time all white all over all of old ping flash white walls shining white no trace eyes holes light blue almost white last colour ping white over. Ping fixed last elsewhere legs joined like sewn heels together right angle hands hanging palms front head haught eyes white invisible fixed front over. Given rose only just one yard invisible bare white all known without within over. White ceiling never seen ping of old only just almost never one second light time white floor never seen ping of old perhaps there. Ping of old only just perhaps a meaning a nature one second almost never blue and white in the wind that much memory henceforth never. White planes no trace shining white one only shining white infinite but that known not. Light heat all known all white heart breath no sound. Head haught eyes white fixed front old ping last murmur one second perhaps not alone eye unlustrous black and white half closed long lashes imploring ping silence ping over.",
        counter: 0,
        actualWord: "Ping",
        pingArray: [],
        actualStyle: "",
        occurrence: [],
        numberOfOccurrence: 0,
        input: "",
        isSubmit: false
    }

    

componentDidMount=()=>{
    let tempArray = this.state.ping.split(" ")
    this.setState({
        pingArray: tempArray,
        
    })
    
}



read = () =>{
    this.setState({

        actualWord: this.state.pingArray[this.state.counter],
        counter: this.state.counter + 1
    })
    let tempArray = this.state.occurrence
    if(this.state.actualWord === this.state.input ) {
        this.setState({
            actualStyle: `red`,
            numberOfOccurrence: this.state.numberOfOccurrence +1
        })
        tempArray.push(`${this.state.input}`)
        this.playAudio()

    } else {
        this.setState({
            actualStyle: ``
        })
        
        tempArray.push(`${this.state.actualWord}  `)
        
    } 

    this.setState({ 
        occurrence: tempArray
    })
} 

playAudio = () => {
    new Audio (ping).play();
}

    handleChange=(e)=>{
        this.setState({
            input: e.target.value
        })
        
    }


    handelSubmit=(e, value)=>{

        

        e.preventDefault()
        this.setState({
            input: value,
            isSubmit: true,
            actualWord: value
        })
console.log("value", this.state.input);
console.log("isSubmit", this.state.isSubmit);

const timer = setInterval(() => {

    if (this.state.counter === this.state.pingArray.length) {
        console.log("counter", this.state.counter)
        console.log("length", this.state.pingArray.length)
        console.log("occ", this.state.occurrence);
        clearInterval(timer);}

    this.read();
  
}, 50)

    }

    


    render() {
        return (<div>
                <div className="top">
                <div className="animate__animated animate__fadeIn occurrenceWrapper">
                    {this.state.occurrence.map(el=>{
                        if(el===this.state.input) {
                            return (
                                <div className="occurance animate__animated animate__fadeIn animate__fast"
                                style={{ color: `red`, fontWeight: "500" }}
                                >{el}{` `}
                                </div>
                            )
                        }
                        return (
                            <div className="occurance animate__animated animate__fadeIn animate__fast"
                            style={{ color: `lightgrey` }}
                            >{el}{` `}</div>
                        )
                    })}
                    

                
                </div>
                <div className="textWrapper animate__animated animate__fadeIn">
                    {(this.state.isSubmit===false)?
                    <div className="introWrapper">
                        <div className="intro">
                        <p>"Ping" is a short story written by Samuel Beckett in French (originally "Bing") in 1966. It was later translated into English by Beckett and published in 1967.</p>

                        <p>It is a tool created for Edyta Stajniak's doctoral dissertation<br/> and will help you to study the short story "Ping" and find the rhythm in the text.</p>

                        </div>
                    <form className="form animate__animated animate__fadeIn"
                    onSubmit={e=>this.handelSubmit(e, e.target.input.value)}>
                        <label>the word you want to hear?</label><br/>
                        <input
                        autoFocus
                        type="text"
                        id="input"
                        value={this.state.input}
                        onChange={this.handleChange}/><br/>
                        <button className="btn">do it</button>
                    </form>
                    </div>:
            <div className="animate__animated animate__fadeIn"
            style={{ color: `${this.state.actualStyle}` }} 
            
            className="text animate__animated animate__fadeIn">
                {this.state.actualWord}
                
            </div>}
            <div className="animate__animated animate__fadeIn"style={{fontWeight: "500"}}>{(this.state.counter > this.state.pingArray.length)?<div className="text animate__animated animate__fadeIn" style={{ color: `red`, fontSize: "5vw"}}>{this.state.numberOfOccurrence} <span style={{ color: `black`}}> / {this.state.pingArray.length}</span></div>:
            <div></div>}

            </div>
            
            </div>
            </div>
            </div>
        );
    }
}

export default Screen;