import React from "react";
import { Button, Modal, ScrollView, TextInput } from "react-native";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Produits from "./Serie";

export default class Catalogue extends React.Component{

  state = {
    modalVisible: false,
    Nom:"",
    image:"",
    prix:""
  };

  AjouterProduit(){
    const {nom, prix, url, serie} = this.state;
    const nouvelleSerie = [serie, {nom,prix,url}];
    this.setState({
      modalVisible: false,
      serie: nouvelleSerie
    })
  }  
  
  render() {
    const {modalVisible} = this.state;
    return(<>
        <Modal visible={this.state.modalVisible}>
          <TextInput 
          placeholder="Nom"
          value={this.state.Nom} 
          onChangeText={(text)=> this.setState({Nom: text})} />
          <TextInput 
          placeholder="image"
          value={this.state.image}
          onChangeText={(text)=> this.setState({image: text})}/>
          <TextInput 
          placeholder="Url"
          value={this.state.prix}
          onChangeText={(text)=> this.setState({prix: text})}/>
          <Button onPress={()=>this.AjouterProduit()}>Valider</Button>
        </Modal>


        <View>
            <TouchableOpacity style={styles.BoutonAjouter}>
              <Text style={styles.text} onPress={()=>this.setState({modalVisible: true})}>Ajouter une série</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.baliseScrollview}>
        <View style={styles.baliseTitreEtPrix}>
            <Text style={styles.TitreetPrix}>Titre:</Text>
          </View >
          <View style={styles.baliseView}>
            <Image
            styles={styles.img}
            source={require("./chainsawman.jpg")}
            />
          </View>
          <View style={styles.baliseTitreEtPrix}>
            <Text style={styles.TitreetPrix}>Prix:</Text>
          </View>
          <View style={styles.baliseView}>
            <TouchableOpacity style={styles.Boutonsupprimer}>
              <Text style={styles.text} >Supprimer</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </>
    )
  }
}


const styles = StyleSheet.create({
  img:{
      width:120,
      height:105,
  },
  baliseScrollview:{
    marginTop:50
  },
  BoutonAjouter:{
    marginHorizontal:40,
    marginBottom:20,
    borderRadius:7,
    backgroundColor:"green",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:45
  },
  TitreetPrix:{
    color:"white",
  },
  text:{
  color:"white",
  fontWeight:"bold"
  },
  baliseView: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  Boutonsupprimer:{
    marginHorizontal:40,
    borderRadius:7,
    backgroundColor:"red",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:45,
    width:300
  },
  baliseTitreEtPrix:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:25,
    backgroundColor:"blue",
  }




})