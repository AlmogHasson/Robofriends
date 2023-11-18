import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox.js'
import './App.css'
import Scroll from '../components/Scroll.js'


function App () {
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')

    //componentDidMount/Update
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { return response.json() })
        .then(users => setRobots(users))
    }, [])


    const onSearch=(event)=> {
        setSearchField(event.target.value)
    };


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (

        !robots.length ? (<h1>LOADING</h1>) :   
        <div className="tc">
            <h1 className="f-headline ">RoboFriends</h1>
            <SearchBox onSearchChange={onSearch} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
        );
    };


export default App;
