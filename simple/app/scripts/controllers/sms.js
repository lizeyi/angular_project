//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }

    },

    process_received_message:function (json_message) {
        console.log(json_message);
        console.log(json_message.messages[0].message);
        console.log(json_message.messages[0].phone);




        var activities=JSON.parse(localStorage.getItem('activities'))

        for(var i=0;i<activities.length;i++)
            if(activities[i].name==localStorage.curent_activity){
                var get_status =JSON.parse(localStorage.getItem('activities'))
                if(get_status[i].status=='true'){


        var messages=JSON.parse(localStorage.getItem('messages')) || [];
        var message={};
        message.activity=localStorage.curent_activity;
       // console.log('00000000000',message.activity)
        message.name=json_message.messages[0].message;
        message.phone=json_message.messages[0].phone;
        messages.unshift(message);
        localStorage.setItem("messages", JSON.stringify(messages));
       // console.log('1111111111',messages)

    }
            }
    }


};



function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;

}

