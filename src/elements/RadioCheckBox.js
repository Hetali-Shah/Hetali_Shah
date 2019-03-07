import React, {Component} from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet, ViewPropTypes} from "react-native";
import PropTypes from 'prop-types';
import AppIcon from './AppIcon';

const propTypes = {
    checkOptions: PropTypes.array.isRequired,
    disabled: PropTypes.bool,
    listStyle: ViewPropTypes.style,
    optionLabel:Text.propTypes.style,
    optionStyle: Text.propTypes.style,
    maxSelected: PropTypes.number,
    onSelectionChange: PropTypes.func,
    isHorizontal: PropTypes.bool,
    checkIconStyle: Text.propTypes.style,
    unCheckIconStyle: Text.propTypes.style,
    checkIcon: PropTypes.any,
    unCheckIcon: PropTypes.any,
};

const defaultProps = {
    checkOptions: [],
    disabled: false,
    listStyle: {},
    optionStyle: {},
    onSelectionChange(option) {},
    isHorizontal: false,
    optionLabel:{},
    checkIconStyle:{},
    unCheckIconStyle:{},
    checkIcon: false,
    unCheckIcon: false,
};

export default class RadioCheckBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedList: []
        };
    }

    /**
     * To manage selected list
     */
    setSelectedList(options = null)
    {
         const checkOptions = (options == null) ? this.props.checkOptions : options;
        const selectedList = [];
        for (let i = 0; i < checkOptions.length; i++) {
            if (checkOptions[i].selected == 1) {
                if (this.props.maxSelected != undefined) {
                    if (selectedList.length < this.props.maxSelected) {
                        selectedList.push(i);
                    }
                } else {
                    selectedList.push(i);
                }
            }
        }
        this.setState({selectedList: selectedList});
    }

    componentWillReceiveProps(nextProps) {
        this.setSelectedList(nextProps.checkOptions);
    }

    /**
     * To clear all selected options
     */
    clearAllSelection()
    {
        this.setState({selectedList: []})
    }

    /**
     * To select all options
     */
    selectAllOptions()
    {
        const selectedList = [];
        for (let i = 0; i < this.props.checkOptions.length; i++) {
            selectedList.push(i);
        }
        this.setState({selectedList: selectedList});
    }

    /**
     * Select options based on provided index list
     * @param {Array of selected index} selectedIndexes
     */
    setSelectedOptions(selectedIndexes)
    {
        var selectedList = this.state.selectedList;
        for (let i = 0; i < selectedIndexes.length; i++) {
            if(this.state.selectedList.indexOf(selectedIndexes[i])==-1)
            {
                selectedList.push(selectedIndexes[i]);
            }
        }
        this.setState({selectedList: selectedList});
    }

    /**
     * Function that provides list of selected item objects
     */
    getSelectedOptions = function (completion) {
        var selectedOptions = [];
        for (let i = 0; i < this.state.selectedList.length; i++) {
            selectedOptions.push(this.props.checkOptions[this.state.selectedList[i]])
        }
        completion(selectedOptions)

    };

    /**
     * To check selected number of items  should be less than provided maxSelected
     */
    checkMaxSelection()
    {
        const maxSelected = this.props.maxSelected;
        const selectedList = this.state.selectedList;
        if (maxSelected && selectedList.length > 0 && selectedList.length >= maxSelected) {
            selectedList.splice(0, 1);
        }
        this.setState({selectedList: selectedList})
    }

    componentDidMount()
    {
        this.setSelectedList();
    }


    /**
     * To check whether provided item is selected or not
     * @param {*} option
     */
    _isSelected(option)
    {
        return this
            .state
            .selectedList
            .indexOf(option.index) !== -1;
    }

    /**
     * Handle click event of option
     * @param {*} option
     */
    _selectOption(option)
    {
        const selectedList = this.state.selectedList;
        if (this._isSelected(option)) {
            selectedList.splice(selectedList.indexOf(option.index), 1);
        } else {
            this.checkMaxSelection();
            selectedList.push(option.index);
        }
        this.setState({selectedList: selectedList});
        this
            .props
            .onSelectionChange(option.item);
    }

    //render icons
    _renderCheckIcon(rowdata)
    {
        if (this._isSelected(rowdata)) {

            return (
                (this.props.checkIcon)
                    ? this.props.checkIcon
                    : <AppIcon style={[styles.icon, this.props.checkIconStyle]}
                         family="MaterialIcons"
                         name={(this.props.maxSelected != undefined) ? 'radio-button-checked' : 'check-box'} />);
        } else {
            return (
                (this.props.unCheckIcon)
                    ? this.props.unCheckIcon
                    : <AppIcon style={[styles.icon, this.props.unCheckIconStyle]}
                               family="MaterialIcons"
                               name={(this.props.maxSelected != undefined) ? 'radio-button-unchecked' : 'check-box-outline-blank'} />);
        }
    }

    //render text
    _renderText(rowdata)
    {
        return (
            <Text style={[styles.optionLabel,this.props.optionLabel]}>{rowdata.item.label}</Text>
        );
    }

    renderSeparator = () => {
        return (<View
            style={{
                height: 5,
                backgroundColor: '#00000000'
            }}/>);
    };

    renderListItem(rowData)
    {
        return (
            <TouchableOpacity
                style={[styles.optionStyle, this.props.optionStyle]}
                activeOpacity={this.props.disabled
                    ? 1
                    : 0.7}
                onPress={!this.props.disabled
                    ? () => {
                        this._selectOption(rowData)
                    }
                    : null}>
                <View >{this._renderCheckIcon(rowData)}</View>
                <View >{this._renderText(rowData)}</View>
            </TouchableOpacity>
        );
    }


    render()
    {
        return (
            <View>
                <FlatList
                    horizontal={this.props.isHorizontal}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={[styles.listStyle, this.props.listStyle]}
                    data={this.props.checkOptions}
                    renderItem={this
                        .renderListItem
                        .bind(this)}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()} ItemSeparatorComponent={this.renderSeparator}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listStyle: {
        marginVertical:10,
    },
    icon: {
        fontSize: 20,
        marginRight: 10,
    },
    optionStyle:{
        flexDirection:'row',
        alignItems:'center'
    },
    optionLabel: {
        color: '#2D2D2D',

    },
});

RadioCheckBox.propTypes = propTypes;
RadioCheckBox.defaultProps = defaultProps;
module.exports = RadioCheckBox;
