matchQuery.find().then(function (results) {
        for (i=0;i<results.length;i++){
            notificationQuery.find().then(function (notifications){
                var j;
                for (j=0;j<notifications.length;j++){
                    console.log('safeDeleteRoute notification result'+j);
                    notifications[j].destroy();
                }
                res.destroy();
            });
        }
    },function(error){
        alert("Error: "+error.code + " " + error.message);
    });