import React, {useEffect, useState} from "react";
import {SPACEX_LAUNCHES} from "./GraphQlApiPaths";


const SpaceX = () => {

    const [data, setData] = useState('')
    useEffect(() => {
        fetch('https://api.spacex.land/graphql/', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({query: SPACEX_LAUNCHES})
        }).then((res) => res.json())
            .then((data) => setData(data.data))
    }, [])

    return (
      <div>
        <h1>Space X Launches</h1>
          {data.launchesPast?.map((mission, idx) => (
              <div key={idx}>
                  <h2>{mission.mission_name}</h2>
              </div>
          ))}
      </div>
    )
}

export default SpaceX;