import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Api from '../android/app/src/config/Api';

const App = () => {

    const [title, setTitle] = React.useState([]);
    const [opening_crawl, setOpening_crawl] = React.useState([]);
    const [director, setDirector] = React.useState([]);
    const [producer, setProducer] = React.useState([]);
    const [release_date, setRelease_date] = React.useState([]);


    Api.get("/films/4/").then((response) => {
        alert(JSON.stringify(response.data.results));
        setTitle(response.data.title);
        setOpening_crawl(response.data.opening_crawl);
        setDirector(response.data.director);
        setProducer(response.data.producer);
        setRelease_date(response.data.release_date);
    });


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>Star Wars</Text>
                <Text style={styles.movies}>Movies</Text>
                <Text style={styles.textTitle}>Movie: {title}</Text>
                <Text style={styles.sinopse}>Synopsis: {opening_crawl}</Text>
                <Text style={styles.director}>Director: {director}</Text>
                <Text style={styles.producer}>Producer: {producer}</Text>
                <Text style={styles.release_date}>Date: {release_date}</Text>
            </ScrollView>
        </View>

        
    );

}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444444',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        textAlign: 'left',
        paddingTop: 50
    },
    text: {
        color: '#FFFF82',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: "center"
    },
    movies: {
        color: '#FFFF82',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    textTitle: {
        color: '#fff',
        paddingTop: 30,
        fontSize: 24,
        padding: 10
    },
    sinopse: {
        color: '#fff',
        paddingTop: 30,
        fontSize: 20,
        padding: 10,
        justifyContent: 'center'
    },
    director: {
        color: '#fff',
        paddingTop: 30,
        fontSize: 20
    },
    producer: {
        color: '#fff',
        paddingTop: 30,
        fontSize: 20
    },
    release_date: {
        color: '#fff',
        paddingTop: 30,
        fontSize: 20
    }
});