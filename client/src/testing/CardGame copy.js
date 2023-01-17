 function CardGame({datos}) {
  return (
    <table class="table">
    <thead>
      <tr>
        <th>Team blue</th>
        <th>{datos.participants[0].win === true ? "Win - Lose" : "Lose - Win"}</th>
        <th>Team red</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{datos.participants[0].summonerName}</td>
        <td width={200}><strong>{Math.floor(datos.gameDuration / 60)}  min</strong></td>
        <td>{datos.participants[1].summonerName}</td>
      </tr>
      <tr>
        <td>{datos.participants[2].summonerName}</td>
        <td></td>
        <td>{datos.participants[3].summonerName}</td>
      </tr>
      <tr>
        <td>{datos.participants[4].summonerName}</td>
        <td></td>
        <td>{datos.participants[5].summonerName}</td>
      </tr>
      <tr>
        <td>{datos.participants[6].summonerName}</td>
        <td></td>
        <td>{datos.participants[7].summonerName}</td>
      </tr>
      <tr>
        <td>{datos.participants[8].summonerName}</td>
        <td></td>
        <td>{datos.participants[9].summonerName}</td>
      </tr>
      <tr>
        <td><strong>Mode: {datos.gameMode}
</strong></td>
        <td>ID: {datos.gameId}   
</td>
        <td><strong>Server :{datos.platformId}</strong>
</td>
      </tr>
    </tbody>
  </table>
  )
}
export default CardGame
