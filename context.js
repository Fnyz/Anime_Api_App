import React, { Component } from 'react'

const MadeContex = React.createContext();

class GlobalProvider extends Component {

  state = {
    listData: [],
    search: '',
    singleData: {},
    isloading:true,
    passSearch: '',

  };

  searchData = (val) => {
    this.setState({search:val});
 
  }

  getdata = async (search) => {

    let url = `https://api.jikan.moe/v4/anime?q=${search? search : 'Buddy Daddies '}&limit=10`;

    const response = await fetch(url);
    const dt = await response.json();
    
    this.setState({
        listData: dt.data,
        isloading:false,
    })
  }
  
  changedata = () => {
    const val = this.state.search
    this.getdata(val);
    this.setState({search:'', isloading:true});
   
    
  }

  getSingle = (id) => {
    const copy = [...this.state.listData];
    let fil = copy.find(item =>{
        if(item.mal_id == id){
            return item;
        }
    });
    return fil;
  }


 
 
  componentDidMount(){
    this.getdata();
  }
  
  


  render() {
    return (
      <MadeContex.Provider value={{
       ...this.state,
         searchData: this.searchData,
         changedata:this.changedata,
         getSingle: this.getSingle
      }}>
       {this.props.children}
      </MadeContex.Provider>
    )
  }

}

const ContextConsumer = MadeContex.Consumer;

export {GlobalProvider, MadeContex, ContextConsumer};