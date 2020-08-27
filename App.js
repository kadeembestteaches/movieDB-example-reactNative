import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, View,Image,FlatList } from 'react-native';

const  App = ()=> {
 
  const [movies, setMovies] =useState([]);

  useEffect(()=>{
    //Send a request to consume the RESTFul API 

    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ab97473b7193d23cef553c0e9ef015c8&language=en-US&page=1")
    .then(res=>res.json())
    .then(data=>{
      
      console.log(data.results);
      setMovies(data.results)
    })
    .catch(err=>console.log(`Error ${error}`));


  },[]);
  

  return (
    <View>
      
      <FlatList
            data={movies}
            renderItem={({item})=>(

                <View key={item.id}  style={styles.container}>
                    <Image 
                    source={{uri:`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`}} 
                    resizeMode="cover"  style={{width:380, height:500}}  />
                </View>
            )
        }
      
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  movieImage:
  {
    marginBottom:10,
    paddingLeft:16,
    paddingRight:16
  }

});

export default App;

