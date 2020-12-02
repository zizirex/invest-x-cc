const getIssuersData = () => {
    fetch ('https://api.investx.com/issuer')
    .then(response => {
        return response.json();
    })
    .then(respData => {
        console.log(respData.data);
        if (respData.data.length > 0){
        
        let tabIns = "";

        respData.data.forEach((i) => {
            tabIns += "<tr>";
            tabIns += `<td><img src="https://logo.clearbit.com/`+i.website+`?size=20">   `+i.name+`</td>`;
            tabIns += `<td><a href=https://`+i.website+`>`+i.website+`</a></td>`;
            tabIns += "<td>"+i.city+"</td>";
            tabIns += "<td>"+i.stage+"</td>";
            tabIns += "<tr>";
        });

        document.getElementById("data-body").innerHTML = tabIns;
    }
    });
};