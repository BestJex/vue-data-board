export default {
  common: {
    dashboard: 'Dashbord',
    chart: 'Chart',
    dataSource: 'Data Source',
    share: 'Share',
    add: 'Add',
    edit: 'Edit',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    name: 'Name',
    desc: 'Description',
    close: 'Close',
    operation: 'Operation',
    back: 'Back',
    save: 'Save',
    open: 'Open',
    closed: 'Closed',
    saveSuccess: 'Success saved',
    deleteSuccess: 'Deleted',
    openGuide: 'Show tutorial'
  },
  auth: {
    useTestAccount: 'Click here to use test account',
    signIn: 'SIGN IN',
    signUp: 'SIGN UP',
    toSignUp: 'Sign up',
    toSignIn: 'Already have an account? Sign In',
    passwordPlaceholder: 'Please enter your password',
    emailPlaceholder: 'Please enter your email',
    usernamePlaceholder: 'Please enter your username',
    logout: 'Log Out',
    signUpSuccess: 'Sign up success, please sign in'
  },
  navbar: {
    document: 'Document',
    home: 'Home'
  },
  home: {
    slogan: 'A Data Analysis Board in Vue.',
    start: 'Get Start'
  },
  dashboard: {
    addDashboard: 'Add Dashboard',
    dashboardName: 'Dashboard Name',
    dashboardDesc: 'Dashboard Description',
    addOrEditDashboard: 'Add or edit Dashboard',
    addChart: 'Add Chart',
    shareLink: 'Share Link',
    emptyDashboardTip: 'Dashboard Is Empty，Go Create Your First Chart!',
    dashboardNamePlaceholder: 'Please enter dashboard name',
    dashboardDescPlaceholder: 'Please enter dashboard description.',
    dashboardList: 'Dashboard List',
    removeChartConfirm: 'Are you sure you want to remove chart from dashboard ?',
    chartQueryException: 'Something wrong with chart {0}.',
    deleteConfirm: 'Are you sure you want to delete dashboard: {0}?'
  },
  chart: {
    myChart: 'My Chart',
    createNewChart: 'Create New Chart',
    editChart: 'Edit Chart',
    createChart: 'Create Chart',
    allCharts: 'AllCharts',
    addToDashboard: 'Add to Dashboard',
    chartName: 'Chart Name',
    chartDesc: 'Chart Description',
    namePlaceholder: 'Please enter chart name',
    descPlaceholder: 'Please enter chart description',
    dimensions: 'Dimension',
    values: 'Values',
    order: 'Order',
    selectOrderBy: 'Select order by',
    descend: 'Descend',
    ascend: 'Ascend',
    filters: 'Filters',
    chartType: 'Chart Types',
    addFilters: 'Add Filters',
    filterField: 'Filter Field',
    filterCantBeEmpty: 'Field and operator can\'t be empty',
    selectFilterField: 'Please select filter field',
    filterOperator: 'Filter Operator',
    selectFilterOperator: 'Please select filter operator',
    comparedValue: 'Compared Value',
    limit: 'Query {0} rows',
    fieldExisted: 'Field already existed.',
    beforeLeaveConfirm: 'Are you sure you want to leave, changes you made may not be saved.',
    deleteConfirm: 'Are you sure you want to delete chart: {0}?',
    chartNameWarning: 'Save failed, please enter chart name. '
  },
  dataSource: {
    sourcePlaceholder: 'Select data source',
    tablePlaceholder: 'Select table',
    table: 'Table',
    fields: 'Fields',
    addDataSource: 'Add Data Source',
    baseName: 'Base Name',
    host: 'Host',
    port: 'Port',
    user: 'User',
    password: 'Password',
    dataBase: 'DataBase',
    createdAt: 'Created Time',
    manageTables: 'Manage Tables',
    tableName: 'Table Name',
    linked: 'Linked',
    deleteConfirm: 'Are you sure you want to remove this data source ?'
  },
  guide: {
    dataPanel: 'Data Panel',
    dataPanelDesc: 'Here is the data source and the field list of the data source, you can switch the data source here, drag the field to the Data Query Panel to query.',
    formPanel: 'Data Query Panel',
    formPanelDesc: 'Perform data query here, you can construct and adjust query statements here to query data.',
    dimensionInput: 'Dimension Editor',
    dimensionInputDesc: 'Dimension refers to the angle of data summarization, such as time dimension, category dimension, etc. The dimension should generally not exceed 2.',
    fieldInput: 'Field Editor',
    fieldInputDesc: 'The field refers to the content of the query data, such as the number, sum, etc. There can be multiple fields, but it should not be too much so as not to affect the visualization effect.',
    vizPanel: 'Visualization panel',
    vizPanelDesc: 'Here is the visualization panel, where you can visualize the data, choose different chart types and styles, etc.'
  }
}
