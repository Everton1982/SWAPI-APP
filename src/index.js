import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Api from '../android/app/src/config/Api';

const App = () => {

    const [title, setTitle] = React.useState([]);
    const [opening_crawl, setOpening_crawl] = React.useState([]);
    const [director, setDirector] = React.useState([]);
    const [producer, setProducer] = React.useState([]);
    const [release_date, setRelease_date] = React.useState([]);

    const [name, setName] = React.useState([]);
    const [height, setHeight] = React.useState([]);
    const [mass, setMass] = React.useState([]);
    const [air_color, setAir_color] = React.useState([]);
    const [skin_color, setSkin_color] = React.useState([]);
    const [eye_color, setEye_color] = React.useState([]);
    const [birth_year, setBirth_year] = React.useState([]);

    Api.get("/films/1").then((response) => {
        setTitle(response.data.title);
        setOpening_crawl(response.data.opening_crawl);
        setDirector(response.data.director);
        setProducer(response.data.producer);
        setRelease_date(response.data.release_date);
    });

    Api.get("/people/1").then((response) => {
        setName(response.data.name);
        setHeight(response.data.height);
        setMass(response.data.mass);
        setAir_color(response.data.air_color);
        setSkin_color(response.data.skin_color);
        setEye_color(response.data.eye_color);
        setBirth_year(response.data.birth_year);
    });


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>Star Wars</Text>
                <Text style={styles.movies}>Movie</Text>
                <Text style={styles.textTitle}>Movie: {title}</Text>
                <Text style={styles.sinopse}>Synopsis: {opening_crawl}</Text>
                <Text style={styles.director}>Director: {director}</Text>
                <Text style={styles.producer}>Producer: {producer}</Text>
                <Text style={styles.release_date}>Date: {release_date}</Text>

                <Text style={styles.people}>People</Text>
                <Text style={styles.textTitle}>Name: {name}</Text>
                <Text style={styles.sinopse}>Height: {height}</Text>
                <Text style={styles.director}>Mass: {mass}</Text>
                <Text style={styles.producer}>Air_color: {air_color}</Text>
                <Text style={styles.release_date}>Skin_color: {skin_color}</Text>
                <Text style={styles.release_date}>Eye_color: {eye_color}</Text>
                <Text style={styles.release_date}>Birth_year: {birth_year}</Text>
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
        textAlign: "center",
        paddingTop: 40
    },
    movies: {
        color: '#FFFF82',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 20,
        paddingBottom: 20,
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
    },
    people: {
        color: '#FFFF82',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 10
    }
});