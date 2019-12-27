import React,{ Component ,PropType } from 'react';
import {FlatList,TouchableO,ImageBackground,View,ScrollView,Image, Dimensions,StyleSheet} from 'react-native';
import {Header,Title,Card,Text,Thumbnail, List, ListItem, Separator,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import Accordion from 'react-native-collapsible/Accordion';
import CollapsibleList from "react-native-collapsible-list";

import CircleView from './CircleView';
import CircleViewClick from './CircleViewClick'
import IMAGES from '../assets/images';

export default class LatestArticle extends Component{
  

	render(){
    // console.log(this.props.navigation);
    return(
   <ScrollView horizontal style={{flex:1,flexDirection:'row',paddingLeft:10}}>
      <Collapse style={{flexDirection:'row',flex:1,}} >
        <CollapseHeader>
          <CircleView source={IMAGES.tech}/>
        </CollapseHeader>
        <CollapseBody>
        <View style={{flex:1,flexDirection:'row'}}>
              <CircleViewClick source={IMAGES.tech_it_easy}/>
          </View> 

        </CollapseBody>
      </Collapse>

        <Collapse style={{flexDirection:'row'}} >
          <CollapseHeader>
            <CircleView source={IMAGES.non_tech}/>
          </CollapseHeader>
          <CollapseBody>
            <View style={{flex:1,flexDirection:'row'}}>

                <CircleViewClick  source={IMAGES.connections}/>
                <CircleViewClick source={IMAGES.fiction}/>
                <CircleViewClick source={IMAGES.open_letter}/>
                <CircleViewClick source={IMAGES.verses} />
                <CircleViewClick source={IMAGES.writers_launge}/>  
     
            </View> 
          </CollapseBody>
        </Collapse>

        <Collapse style={{flexDirection:'row'}} >
          <CollapseHeader>
            <CircleView source={IMAGES.more_content}/>
          </CollapseHeader>
          <CollapseBody>
          <View style={{flex:1,flexDirection:'row'}}>
                <CircleViewClick  navigation={this.props.navigation} categoryid='79' source={IMAGES.allumni}/>
                <CircleViewClick source={IMAGES.ddu_speaks}/>
                <CircleViewClick source={IMAGES.interview}/>
               
            </View> 
          </CollapseBody>
        </Collapse>

        <Collapse style={{flexDirection:'row'}} >
          <CollapseHeader>
              <CircleView source={IMAGES.past_year_papers}/>  
          </CollapseHeader>
        </Collapse>
    
    </ScrollView>
    );
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    padding: 10,
  }
});
  