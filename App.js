import {Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useState , useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {

  const [newdate,setnewdate]=useState(new Date());
  const [input,setinput]=useState(false);
  const [model,setmodel]=useState('date');
  const [date,setdate]=useState(new Date());
  const [input1,setinput1]=useState(false);
  const [model1,setmodel1]=useState('date');
  const [ans,setans]=useState("");
  const [sol,setsol]=useState("");
  const [del,setdel]=useState();
  const [del1,setdel1]=useState();
  

  const showmodel=(currentMode)=>{
    setinput(true);
    setmodel(currentMode)
  }
  useEffect(()=>{
var myDate = date;
var tomorrowDt = myDate.setDate(myDate.getDate()+1);
// console.log("Tomorrow Dt : ",tomorrowDt);
setnewdate(tomorrowDt);
  },[date])

  const today1=new Date();
  const getdate1=today1.getDate();
  const getmonth1=today1.getMonth();
  const getyr1=today1.getFullYear();
  const min=new Date(getyr1,getmonth1,getdate1);

  const onchange=(event,selectedDate)=> {
    
    const currentDate=selectedDate || date;
    setdate(currentDate)
    var temp=new Date(currentDate);
     var d1=(temp.getMonth()+1)+"/"+(temp.getDate())+"/"+temp.getFullYear();
    setdel(d1);
    console.log("From date:",d1)
    setinput(false)
    // console.log(del);
  }

  const showmodel1=(currentMode)=>{
     setinput1(true);
    setmodel1(currentMode)
  }

  const today=new Date();
  const getdate=today.getDate();
  const getmonth=today.getMonth();
  const getyr=today.getFullYear();

  const onchange1=(event,selectedDate)=> {
    const curentDate1=selectedDate || newdate;
    setnewdate(curentDate1)
    var temp=new Date(curentDate1);    
    let d2=(temp.getMonth()+1)+"/"+(temp.getDate())+"/"+temp.getFullYear();
    setdel1(d2);
    console.log("To date:",d2)
    // console.log("Del:",del1);
    setinput1(false)
  }

  const submit=()=>{    
    var remp=(newdate);
    var d1=(remp.getMonth()+1)+"/"+remp.getDate()+"/"+remp.getFullYear();
    var i=new Date(d1);
    var temp =(date);
    var d2=(temp.getMonth()+1)+"/"+(temp.getDate())+"/"+temp.getFullYear();
    var o=new Date(d2);
    var time=Math.abs(i-o);
    var days=Math.ceil(time/(1000*60*60*24));
    var interest=days*1.5;
    var month=((days*1.5)+15);
    var last=((days<=30)?interest:month);
    if(newdate>date){
      setans(days);
      setsol(last);
      // console.log(o);
    }
    else{
      alert("Wrong!")
    }
  }
  
  return (
    <View style={{
      backgroundColor:'palegreen',
      flex:1,
    }}>
      <Text style={{color:'white'}}>
        {newdate ?.toLocalDateString}
      </Text>
      <View style={{
        marginTop:120,
        paddingLeft:20,
        paddingRight:20
      }}>
      <View style={{
        backgroundColor:'greenyellow',
        height:'65%',
        borderRadius:10,
        paddingHorizontal:20,
        paddingTop:20
      }}>
      <View style={{
        marginTop:18,        
      }}>
        <View style={{
          flexDirection:'row'
        }}>
          <Text style={{
        fontSize:35,
        fontWeight:"bold",
        paddingLeft:20
      }}>
            From :
          </Text>
        <TouchableOpacity onPress={() =>showmodel('date')}>
          <Text style={{
        fontSize:35,
        fontWeight:"bold",
        paddingLeft:20,
        height:40,
        width:200,
        borderWidth:2,
        marginLeft:10,
        backgroundColor:'white',
        color:'blue'
      }}>
         {del}
          </Text>
        </TouchableOpacity>
        {input &&(<DateTimePicker 
        testID='dateTimePicker'
        model={model}
        value={date}
        display='default'
        minimumDate={min}
        onChange={onchange}
        />)}
        </View>
        <View style={{
          flexDirection:'row',
          marginTop:20
        }}>
          <Text style={{
        fontSize:35,
        fontWeight:"bold",
        paddingLeft:20,
        paddingTop:20        
      }}>
            To      :
          </Text>
        <TouchableOpacity onPress={()=>showmodel1('date')}>
      <Text style={{
        fontSize:35,
        fontWeight:"bold",
        marginLeft:50,
        height:40,
        width:200,
        borderWidth:2,
        marginLeft:10,
        marginTop:20,
        backgroundColor:'white',
        paddingLeft:20,
        color:'blue'
      }}>
        {del1}
      </Text>
      </TouchableOpacity>
      {input1 &&(<DateTimePicker 
        testID='dateTimePicker'
        mode={model1}
        value={date}
        display='default'
        minimumDate={newdate}
        onChange={onchange1} 
        />)}
        </View>
      </View>
      <TouchableOpacity
      style={{ 
        paddingLeft:80
      }} 
      onPress={submit}>
        <Text style={{
          color:"white",
          marginTop:50,
          backgroundColor:"darkgreen",
          fontSize:40,
          height:50,
          width:140,
          paddingLeft:15,
          borderRadius:20,
        }}>
          SUBMIT
        </Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={{
        height:'17%',
        width:350,
        backgroundColor:'springgreen',
        borderRadius:20,
        marginLeft:22,
        marginBottom:50
      }}>
        <Text style={{
          paddingLeft:20,
          paddingTop:20,
          fontSize:40,
          fontWeight:'bold'
        }}>
          Total Days      : {ans}
        </Text>
        <Text style={{
          paddingLeft:20,
          paddingTop:20,
          fontSize:40,
          fontWeight:'bold'
        }}>
          Total Amount : {sol}
        </Text>
      </View>
    </View>
  );
}
