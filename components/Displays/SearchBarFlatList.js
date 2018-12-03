import React from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback } from 'react-native';
import { SearchBar } from 'antd-mobile-rn'

export default class SearchBarFlatList extends React.PureComponent {
  state = {
    filterText: '',
    editing: false,
  }
  render() {
    let { data, filterAttribute, ...rest } = this.props
    const { filterText, editing } = this.state
    data = filterText ? data.filter(el => el[filterAttribute].match(new RegExp(filterText, 'gi'))) : data
    return(
      <View style={{flex: 1, width: '100%'}}>
        <TouchableWithoutFeedback style={editing && !filterText ? styles.backdrop : {}} onPress={()=>this.searchBar.inputRef.blur()}>
          <View style={editing && !filterText ? styles.backdrop : {}} />
        </TouchableWithoutFeedback>
        <SearchBar
          placeholder="Search"
          cancelText="Cancel"
          ref={ref => this.searchBar = ref}
          value={filterText}
          onChange={filterText => this.setState({filterText})}
          onFocus={()=>this.setState({editing: true})}
          onBlur={()=>this.setState({editing: false})}
          onCancel={() => {
            this.setState({filterText: ''})
            this.searchBar.inputRef.clear()
            this.searchBar.inputRef.blur()
          }}
        />
        <FlatList
          keyboardDismissMode="on-drag"
          data={data}
          {...rest}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    zIndex: 100,
    top: 44,
    bottom: 0,
    left: 0,
    right: 0,
  }
})