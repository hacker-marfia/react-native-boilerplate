import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { RoundButton } from 'app/components'
import { colors } from 'app/styles'


export default class SelectAnswerCell extends React.PureComponent {
    state= {
        selectedAnswer: ''
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.shouldRerender
    // }
    
    render() {
        let { number, numOfAnswers, singleLine } = this.props
        let answers = ['A', 'B', 'C', 'D','E', 'F']
        answers = answers.splice(0, this.props.numOfAnswers)

        const numOfColumns = numOfAnswers !== 4  ? 3 : 6
        const cellHeight = numOfAnswers !== 4 ? { height: 100 } : { height: 40 }
        const buttonMargin = numOfAnswers !== 4 ? { marginVertical: 5 } : null

        return (
            <SafeAreaView style={[styles.cell, singleLine ? { height: 40 } : cellHeight ]}>
                <View style={styles.textContainer}>
                    <Text style={styles.mainText} numberOfLines={1} >{number}</Text>
                </View>
                <View>
                    <FlatList
                        columnWrapperStyle={{justifyContent: 'center'}}
                        data={answers} 
                        scrollEnabled={false}
                        numColumns={singleLine ? 6 : numOfColumns}
                        keyExtractor={(item, index)=> String(index)}
                        renderItem={ ({ item, index }) =>this.renderButtons(item, singleLine ? null : buttonMargin)} 
                        />
                </View>
            </SafeAreaView>
        )
    }

    renderButtons = (letter, margin, index) => {
        let { selectedAnswer } = this.state
        selectedAnswer = selectedAnswer ? selectedAnswer : this.props.selectedAnswer
        const selectedStyle = letter == selectedAnswer
            ? { backgroundColor: colors.main }
            : { backgroundColor: 'gray' }
        return  <View style={margin} key={String(index)} >
                    <RoundButton 
                        title={letter} 
                        style={[styles.roundButton, selectedStyle]} 
                        onPress={() => {
                            !this.props.disabled ? 
                            (
                                this.setState({selectedAnswer: letter}),
                                this.props.onSelect(letter)
                            )
                            :
                            void(0)
                        }} 
                        />
                </View> 
    }

    getAnswer = () => this.state.selectedAnswer
}


const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'white',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    mainText: {
        fontSize: 20,
    },
    roundButton: {
        height: 36,
        width: 36,
        borderRadius: 18,
        marginHorizontal: 10,
        backgroundColor: 'gray'
    },
})

SelectAnswerCell.propTypes = {
    selectedAnswer: PropTypes.string,
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onSelect: PropTypes.func,
    shouldRerender: PropTypes.bool,
    numOfAnswers: PropTypes.oneOf([4, 5, 6]),
    disabled: PropTypes.bool
}

SelectAnswerCell.defaultProps = {
    selectedAnswer: '',
    number: 1,
    onSelect: () => {},
    shouldRerender: false,
    numOfAnswers: 4,
    disabled: false
}