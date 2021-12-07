const colorYellow = "#ff0";
const colorDarkBlue = "#0000a8";
const colorCyan = "cyan";
const colorGreen = "#00a800";
const colorTeal = "#00a8a8";
const colorBrown = "#a85600";
const colorRed = "#a80000";
const colorBlue = "#3f51b5";
const colorGrey = "rgb(168, 168, 168)";
const colorWhite = "white";
const colorBlack = "black";

const theme = {
  typography: {
    fontFamily: "inherit",
  },
  palette: {
    //type: "dark",
  },
  overrides: {
    MuiButtonBase: {
      root: {
        content: '""',
        borderRadius: "inherit",
      },
    },
    MuiAppBar: {
      colorSecondary: {
        width: "100%",
        zIndex: 9,
        display: "block",
        position: "fixed",
        backgroundColor: colorGrey,
        padding: "0px 2px",
        height: 26,
        lineHeight: "26px",
        color: colorBlack,
        "& div": {
          height: "inherit",
          lineHeight: "inherit",
          minHeight: "unset",
        },
        boxShadow: "none !important",
      },
    },
    /* @ts-ignore */
    RaUserMenu: {
      avatar: {
        height: "20px !important",
        width: "24px !important",
        lineHeight: "20px !important",
        borderRadius: 0,
        "& img": {
          filter: "contrast(1000%)",
        },
      },
      userButton: {
        color: colorBlack,
        padding: 0,
        paddingLeft: 10,
        fontSize: "inherit",
        transition: "none",
        lineHeight: "1em",
        boxShadow: "none",
      },
    },
    RaSidebar: {
      fixed: {
        display: "block !important",
        top: 8,
        position: "fixed",
        left: 0,
        backgroundColor: colorTeal,
        minWidth: 200,
        boxShadow: `10px 10px ${colorBlack} !important`,
        padding: 6,
        height: "100%",
        zIndex: 8,
        "& nav": {
          top: 8,
          "& ul": {
            border: `2px ${colorBlack} solid`,
            margin: 0,
            padding: 0,
            listStyleType: "none",
            marginTop: -2,
            textTransform: "capitalize",
            "& li": {
              display: "block",
              margin: 6,

              "& a": {
                paddingLeft: 1,
                display: "block",
                color: colorBlack,
                "&:hover": {
                  backgroundColor: colorYellow,
                },
                "&::first-letter": {
                  color: colorRed,
                },
              },
            },
            "&:first-child": {
              marginTop: 20,
            },
          },
        },
      },
    },
    MuiPaper: {
      root: {
        borderRadius: 0,
        backgroundColor: colorDarkBlue,
        color: colorWhite,
        "& h6, p": {
          color: "inherit",
        },
        transition: "none",
      },
      rounded: {
        borderRadius: 0,
      },
      elevation1: {
        boxShadow: "none",
      },
    },
    MuiGrid: {
      container: {
        backgroundColor: "transparent",
      },
      item: {
        backgroundColor: colorDarkBlue,
        borderStyle: "double",
        borderWidth: "thick",
        borderColor: colorWhite,
        padding: 0,
        margin: 6,
      },
    },
    MuiCardHeader: {
      subheader: {
        color: colorBlue,
      },
    },
    MuiAvatar: {
      root: {
        borderRadius: 0,
      },
      colorDefault: {
        backgroundColor: "transparent",
      },
    },
    MuiCheckbox: {
      root: {
        color: "inherit",
        "&.Mui-checked": {
          color: "inherit",
          "&:before": {
            content: '"[■]"',
          },
        },
        "&:before": {
          content: '"[ ]"',
          minWidth: "50px",
          letterSpacing: -3,
        },
        "& span": {
          display: "none",
        },
      },
      colorPrimary: {
        color: "inherit",
        "&.Mui-checked": {
          color: "inherit",
        },
      },
    },
    MuiIconButton: {
      root: {
        transition: "none",
        padding: 0,
        marginRight: 10,
        borderRadius: 0,
        "&:hover": {
          backgroundColor: `${colorYellow} !important`,
          borderRadius: 0,
        },
        "& svg": {
          transition: "none",
        },
      },
    },
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: `${colorYellow} !important`,
          borderRadius: 0,
        },
        transition: "none",
        outline: 0,
        padding: "1px 10px",
        marginRight: 12,
        backgroundColor: colorGreen,
        color: colorBlack,
        "&.Mui-disabled": {
          backgroundColor: colorRed,
          color: colorBlack,
          textDecoration: "line-through",
        },
        border: "none",
        cursor: "pointer",
        textAlign: "center",
        boxShadow: "10px 10px black",
        fontSize: "0.8125rem",
        borderRadius: 0,
        userSelect: "none",
      },
      textPrimary: {
        color: colorBlack,
      },
      textSizeSmall: {
        padding: "1px 10px",
      },
      text: {
        padding: "1px 10px",
      },
      contained: {
        boxShadow: "10px 10px black",
        "&.Mui-disabled": {
          backgroundColor: colorRed,
          color: colorBlack,
          textDecoration: "line-through",
          boxShadow: "10px 10px black",
        },
      },
      containedPrimary: {
        backgroundColor: colorGreen,
        color: colorBlack,
      },
    },
    MuiFormControl: {
      root: {
        color: colorWhite,
        flexDirection: "row",
        "& .ql-toolbar": {
          "& span": {
            color: `${colorWhite} !important`,
          },
          "& svg": {
            fill: `${colorWhite} !important`,
            "& .ql-stroke": {
              stroke: `${colorWhite} !important`,
            },
          },
          "& button, .ql-picker": {
            "&:hover": {
              backgroundColor: `${colorYellow} !important`,
              "& .ql-picker-label": {
                color: "black !important",
              },
              "& .ql-stroke": {
                stroke: "black !important",
              },
            },
          },
        },
        "& .ql-editor": {
          backgroundColor: "black !important",
          "&:before": {
            content: "unset !important",
          },
          "&:after": {
            content: "unset !important",
          },
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: colorWhite,
        minWidth: 250,
        padding: 0,
        margin: 0,
        marginRight: 20,
        width: "250px",
        overflow: "hidden",
        "&:empty": {
          display: "none",
        },
        "& span": {
          backgroundColor: colorDarkBlue,
        },
        "&.Mui-disabled": {
          color: colorWhite,
        },
        "&:after": {
          content: '"........................................:"',
          right: 0,
          position: "absolute",
          zIndex: -1,
        },
        "&.Mui-error": {
          color: colorWhite,
          backgroundColor: "red",
        },
      },
    },
    MuiInputLabel: {
      animated: {
        transition: "none",
      },
      formControl: {
        display: "flex",
        transform: "scale(1) !important",
        alignItems: "center",
        position: "relative",
        "&.Mui-focused": {
          color: "inherit",
        },
      },
      shrink: {
        display: "flex",
        transform: "scale(1) !important",
        alignItems: "center",
        position: "relative",
      },
      marginDense: {
        transform: "scale(1) !important",
      },
    },
    /* @ts-ignore */
    RaCheckboxGroupInput: {
      label: {
        transform: "scale(1) !important",
      },
    },
    MuiFormGroup: {
      root: {
        position: "absolute",
        top: -25,
        left: 260,
      },
    },
    RaFileInput: {
      dropZone: {
        backgroundColor: "transparent",
        color: colorWhite,
        border: "solid 2px white",
      },
    },
    RaImageInput: {
      dropZone: {
        backgroundColor: "transparent",
        color: colorWhite,
        border: "solid 2px white",
      },
    },
    MuiInputBase: {
      root: {
        minWidth: 200,
      },
      input: {
        padding: 0,
        height: 30,
      },
    },
    MuiInput: {
      root: {
        display: "flex",
        backgroundColor: colorBlack,
        color: colorWhite,
        marginTop: "0 !important",
      },
      underline: {
        transition: "none",
        border: "none",
        "&:before": {
          transition: "none",
          border: "none",
          content: "unset",
        },
        "&:after": {
          transition: "none",
          border: "none",
          content: "unset",
        },
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
          transition: "none",
          fill: colorBlack,
        },
        "&.Mui-disabled": {
          backgroundColor: "transparent",
        },
        "&.Mui-focused": {
          backgroundColor: "transparent",
        },
        "& svg": {
          transition: "none",
          fill: colorWhite,
          "&:hover": {
            transition: "none",
            fill: colorBlack,
          },
        },
      },
      adornedEnd: {
        paddingRight: 0,
      },
      inputMarginDense: {
        paddingTop: "0 !important",
        paddingBottom: "0 !important",
      },
      multiline: {
        padding: 0,
        paddingTop: "0 !important",
        paddingBottom: "0 !important",
      },
      input: {
        height: 30,
        display: "flex",
        padding: 0,
        backgroundColor: colorBlack,
        color: colorWhite,
        marginTop: "0 !important",
        borderRadius: 0,
        boxSizing: "border-box",
        "&.Mui-disabled": {
          backgroundColor: "transparent",
        },
      },
      underline: {
        transition: "none",
        border: "none",
        "&:before": {
          transition: "none",
          border: "none",
          content: "unset",
        },
        "&:after": {
          transition: "none",
          border: "none",
          content: "unset",
        },
      },
    },
    RaResettableTextField: {
      clearButton: {
        "&:hover": {
          "& svg": {
            transition: "none",
            fill: colorBlack,
          },
        },
      },
    },
    MuiFormHelperText: {
      root: {
        marginTop: 0,
        display: "flex",
        alignItems: "center",
        "&.Mui-error": {
          color: colorWhite,
          backgroundColor: "red",
        },
      },
    },
    RaLabeled: {
      value: {
        padding: 0,
      },
    },
    RaLoginForm: {
      input: {
        "& label": {
          "&:after": {
            content: '"..............:"',
          },
        },
      },
    },
    MuiChip: {
      root: {
        borderRadius: 0,
      },
      labelSmall: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      label: {
        color: colorWhite,

        backgroundColor: colorBlack,
      },
      sizeSmall: {
        height: 20,
      },
    },
    MuiTabs: {
      flexContainer: {
        color: colorCyan,
        backgroundColor: colorDarkBlue,
        transition: "none",
        borderBottom: "2px solid",
      },
      root: {
        color: colorCyan,
        backgroundColor: "inherit",
        transition: "none",
        borderBottom: "2px solid",
      },
    },
    MuiTab: {
      root: {
        "&:hover": {
          color: colorBlack,
          backgroundColor: colorYellow,
          opacity: 1,
        },
        "&.Mui-selected": {
          color: colorBlack,
          backgroundColor: colorYellow,
          opacity: 1,
        },
      },
      textColorPrimary: {
        "&:hover": {
          color: colorBlack,
          backgroundColor: colorYellow,
          opacity: 1,
        },
        "&.Mui-selected": {
          color: colorBlack,
          backgroundColor: colorYellow,
          opacity: 1,
        },
      },
    },
    PrivateTabIndicator: {
      root: {
        display: "none",
      },
    },
    RaLayout: {
      content: {
        backgroundColor: colorDarkBlue,
        borderStyle: "double",
        borderWidth: "thick",
        borderColor: colorWhite,
      },
      root: {
        backgroundImage:
          "url(node_modules/tuicss/dist/images/bg-blue-black.png)",
        "& .edit-page": {
          backgroundColor: colorDarkBlue,
          borderStyle: "double",
          borderWidth: "thick",
          borderColor: colorWhite,
        },
      },
    },
    MuiTable: {
      root: {
        color: colorWhite,
      },
    },
    MuiTableRow: {
      hover: {
        "&:hover": {
          backgroundColor: "cyan !important",
          color: colorBlack,
        },
      },
    },
    MuiTableSortLabel: {
      root: {
        color: colorYellow,
      },
      active: {
        color: `${colorYellow} !important`,
        "& svg": {
          color: `${colorYellow} !important`,
          transition: "none",
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 0,
        borderLeft: "1px solid",
      },
      head: {
        color: colorYellow,
        fontWeight: "bold",
        backgroundColor: colorDarkBlue,
        borderLeftColor: "transparent",
        textAlign: "center",
      },
      body: {
        color: "inherit",
      },
    },
    RaDatagrid: {
      headerCell: {
        backgroundColor: colorDarkBlue,
      },
      expandIcon: {
        color: colorWhite,
        transition: "none",
        "& svg": {
          transition: "none",
        },
      },
      expandIconCell: {
        borderLeft: "none",
        color: colorYellow,
      },
    },
    MuiTablePagination: {
      toolbar: {
        color: colorCyan,
        borderTop: "2px solid cyan",
      },
      input: {
        transition: "none",
        "& svg": {
          color: "currentColor",
        },
      },
      menuItem: {
        color: colorWhite,
        transition: "none",

        "&.Mui-selected": {
          color: colorBlack,
          backgroundColor: colorYellow,
          "&:hover": {
            color: colorBlack,
            backgroundColor: colorYellow,
          },
        },
        "&:hover": {
          color: colorBlack,
          backgroundColor: colorYellow,
        },
      },
    },
    RaList: {
      root: {
        backgroundColor: colorDarkBlue,
      },
      main: {
        color: colorWhite,
      },
      content: {
        transition: "none",
      },
      bulkActionsDisplayed: {
        transition: "none",
      },
    },
    RaEdit: {
      root: {
        backgroundColor: colorDarkBlue,
      },
      main: {
        color: colorWhite,
      },
    },
    RaShow: {
      root: {
        backgroundColor: colorDarkBlue,
      },
      main: {
        color: colorWhite,
      },
    },
    RaCreate: {
      root: {
        backgroundColor: colorDarkBlue,
      },
    },
    RaToolbar: {
      toolbar: {
        backgroundColor: colorDarkBlue,
      },
    },
    RaListToolbar: {
      toolbar: {
        color: colorCyan,
        backgroundColor: "inherit",
        transition: "none",
        borderBottom: "2px solid",
      },
    },
    RaBulkActionsToolbar: {
      toolbar: {
        color: colorCyan,
        backgroundColor: "inherit",
        transition: "none",
      },
      icon: {
        backgroundColor: colorGreen,
        color: colorBlack,
        boxShadow: "10px 10px black",
        transition: "none",
      },
    },
    MuiListItem: {
      root: {
        transition: "none",
        "& svg": {
          transition: "none",
        },
      },
      button: {
        transition: "none",
      },
    },
    MuiCollapse: {
      root: {
        transition: "none",
      },
    },
    MuiPopover: {
      paper: {
        backgroundColor: colorBrown,
        color: colorWhite,
        "& ul > li": {
          color: "inherit",
          "&.MuiListItem-button:hover": {
            transition: "none",
            color: colorBlack,
            "& svg": {
              transition: "none",
              fill: colorBlack,
            },
            backgroundColor: colorYellow,
          },
          "& div": {
            minWidth: 30,
          },
          "& svg": {
            transition: "none",
            fill: colorWhite,
          },
        },
        borderStyle: "solid",
        borderWidth: "medium",
        borderColor: colorWhite,
        transition: "none !important",
      },
    },
    RaLogin: {
      main: {
        backgroundImage:
          "url(node_modules/tuicss/dist/images/bg-blue-black.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "initial",
      },
      card: {
        backgroundColor: colorBrown,
        color: colorWhite,
        borderStyle: "solid",
        borderWidth: "medium",
        borderColor: colorWhite,
        transition: "none !important",
        minWidth: 600,
      },
    },
  },
};

export default theme;
