import React,{Component} from 'react' ;
import './Apply.css'

class Classcomponent extends Component{
    state = {
        Name : "",
        EmpData : [],
        Dept : "",
        Rating : ""
    }
    changeHandle=(item2)=>{
        this.setState({[item2.target.name]: item2.target.value})
        this.setState({[item2.target.dept]: item2.target.value})
        this.setState({[item2.target.Rating]: item2.target.value})

    }
    clickHandle=()=>{
        let newObj = {
            name : this.state.Name,
            dept : this.state.Dept,
            Rating : this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({EmpData : this.state.EmpData} )
        console.log(this.state.EmpData);
        this.state.Name=""
        this.state.Dept=""
        this.state.Rating=""
    }
    render(){
        return(
            <div>
            <from>           
             <label htmlFor="name" className="first">Name : </label>
            <input id="first1" type="text" placeholder="enter name" name="Name" value={this.state.Name} onChange={this.changeHandle} required /><br/><br/>
            <label htmlFor="dept" className="second">Department : </label>
            <input id="second2" type="text" placeholder="enter name" name="Dept" value={this.state.Dept} onChange={this.changeHandle} required /><br/><br/>
            <label htmlFor="Rating" className="third">Rating : </label>
            <input id="third3" type="Rating" placeholder="enter name" name="Rating" value={this.state.Rating} onChange={this.changeHandle} required />
            <br/> <br/>
            <button type="button " onClick={this.clickHandle} className="our-Button"> SUBMIT</button>

            </from>
            <div className="Show-data">
                
            {this.state.EmpData.map((item,index)=>{
                return(
                    // <div className="Show-data">
                    <span className='span'>Name: {item.name} | Dept : {item.dept} | Rating : {item.Rating}</span>
                    //  </div>
                    
                )
            })}
               </div>
            </div>

        )
    }
}
export default Classcomponent ;

