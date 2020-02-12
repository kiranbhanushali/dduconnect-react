import React  , { Component ,PropType } from 'react';
import { View ,Text ,Button,StyleSheet,Dimensions} from 'react-native';
import PDFView from 'react-native-view-pdf';

const resources = {
	file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
	url: 'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf',
	base64: 'JVBERi0xLjMKJcfs...',
  };
export default class AcademicCalenderScreen extends Component{

	render(){
		const resourceType = 'base64';

		return (
		  <View style={{ flex: 1 }}>
			{/* Some Controls to change PDF resource */}
			<PDFView
			  fadeInDuration={250.0}
			  style={{ flex: 1 }}
			  resource={resources[resourceType]}
			  resourceType={resourceType}
			  onLoad={() => console.log(`PDF rendered`)}
			/>
		  </View>
		);
		
	}

}

 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});