import { makeStyles } from "@material-ui/core/styles";

export const useQuizStyles = makeStyles((theme) => ({
    heading: {
        display: "flex",
        justifyContent: "center",
    },
      
    quizCard: {
        backgroundColor: "#fff",
        margin: "20px auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(158, 207, 231, 1)",
        borderRadius: "10px",
        maxWidth: "800px",
        width: "80%",
    },
      
    containerCenter: {
        textAlign: "center",
    },
      
    optionsContainer: {
        marginTop: "15px",
    },
    answerOptions: {
        listStyleType: "none",
        padding: 0,
    },
      
    answerOptionsLiLabel: {
        display: "block",
        marginBottom: "5px",
    },
      
    submitButton: {
        backgroundColor: theme.palette.primaryBackground.default,
        color: theme.palette.text.default,
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
        transition: "backgroundColor 0.3s ease",
        "&:hover": {
            backgroundColor: theme.palette. highlightColor.default,
        },
    },
      
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
    },
    tableThTd: {
        border: "1px solid #9ecfe7",
    },
      
    thTd: {
        padding: "8px",
        textAlign: "left",
    },
    th: {
        backgroundColor: "#9ecfe7",
    },
      
    "@media (max-width: 786px)": {
        quizCard: {
            width: "75%",
            padding: "15px",
        },
    },
}));
