# react-pack
Basic React Components

## Redux reducers

```
const mapStateToProps = state => {
    return {
        loading: createLoadingSelector(['SING_IN'])(state),
        errors: createErrorSelector(['SING_IN'])(state),
        status: createStatusSelector('SING_IN')(state),
    };
};
```

## Backlog
### <Form> 
- add up field prefixes/postfixes (https://material-ui.com/components/text-fields/#input-adornments)
- integrate font awesome icons
- add field tip below, and placeholder, disabled/checked/selected prop
- several fields in line and fields groups
- inherit common Field and FieldProps
- inherit field types, i.e. add email field type with validation
- add twbs datalist support
- custom field type
- add datepicker fieldtype/example based on third party, check responsibility
- add phone field type using existing phone schema with country codes
- add country fieldtype/example based on third party, check responsibility
- add region of given country fieldtype/example based on third party with existing dictionary, check responsibility
- add money=[amount, currency] field type, check responsibility
- add file fieldtype/example based on third party, check responsibility