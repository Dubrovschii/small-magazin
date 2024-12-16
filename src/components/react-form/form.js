import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../input/input";
import { Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import './form.css'
function Form() {
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            name: "",
            phone: "",
            message: "",
        },
    });


    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {
        console.log("Form data:", data);

        handleClickOpen();

        reset();
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                maxWidth: "100%",
                margin: "0 auto",
                padding: "20px",
                backgroundColor: "#edb021",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <h2 style={{ textAlign: "center", color: "#202733" }} className="pb40">
                Send your message
            </h2>
            <Input
                control={control}
                name="name"
                placeholder="Input your name"
                rules={{ required: "Name is required" }}
            />
            <Input
                control={control}
                name="phone"
                placeholder="Input your phone"
                rules={{
                    required: "Phone is required",
                    pattern: {
                        value: /^[0-9]+$/,
                        message: "Phone must contain only numbers",
                    },
                }}
            />
            <Input
                control={control}
                name="message"
                placeholder="Input your message"
                rules={{ required: "Message is required" }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                    marginTop: "20px",
                    padding: "10px",
                    fontSize: "16px",
                    textTransform: "none",
                }}
            >
                Submit
            </Button>


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                    <p>Thank you! Your message has been sent successfully.</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Form;
