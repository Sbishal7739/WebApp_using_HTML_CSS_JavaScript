const insert = document.getElementsByClassName('insert')[0]; // Get the first element with the 'insert' class

window.addEventListener('keydown', function (event) {
    console.log(insert);
    insert.innerHTML = `
    <div class="color">
    <table>
      <tr>
        <th>key</th>
        <th>key code</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${event.key === " "?"Space":event.key}</td>
        <td>${event.keyCode}</td>
        <td>${event.code}</td>
      </tr>
    </table>
    </div>
    `;
});
