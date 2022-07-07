import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import KnittingTheme, { palette } from "../assets/Theme";
import { modalTitle } from "../assets/Theme";
import { ModalButton } from "./ModalButton";

export const NewProjectSizeAndColourSelectionModal = ({ open, onClick }) => {
  const {
    register,
    toggleIsOpen,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClose={toggleIsOpen} onClick={onClick}>
        <>
          <Typography variant="h4" sx={modalTitle}>
            New Knitting Project
          </Typography>
          <Box sx={{ maxWidth: "80%", margin: "0 auto", padding: "10px 0" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box padding="10px">
                <TextField
                  fullWidth
                  {...register("projectName", { required: "This is required" })}
                  placeholder="Project Name*"
                />
                <Typography variant="p" color={palette.knittingPurple}>
                  {errors.projectName?.message}
                </Typography>
              </Box>
              <Box padding="10px">
                <TextField
                  fullWidth
                  {...register("projectType")}
                  placeholder="Project Type"
                />
              </Box>
              <Box padding="10px" textAlign="center">
                <Select
                  {...register("Row", { required: "This is required" })}
                  native
                  label="Row"
                  sx={{ margin: "10px" }}
                >
                  <option value=""> ---Row*--- </option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                  <option value={4}>Four</option>
                  <option value={5}>Five</option>
                  <option value={6}>Six</option>
                  <option value={7}>Seven</option>
                  <option value={8}>Eight</option>
                  <option value={9}>Nine</option>
                  <option value={10}>Ten</option>
                  <option value={11}>Eleven</option>
                  <option value={12}>Twelve</option>
                </Select>
                <Select
                  {...register("Column", { required: "This is required" })}
                  native
                  label="Column"
                  sx={{ margin: "10px" }}
                >
                  <option value=""> --Column*-- </option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                  <option value={4}>Four</option>
                  <option value={5}>Five</option>
                  <option value={6}>Six</option>
                  <option value={7}>Seven</option>
                  <option value={8}>Eight</option>
                  <option value={9}>Nine</option>
                  <option value={10}>Ten</option>
                  <option value={11}>Eleven</option>
                  <option value={12}>Twelve</option>
                </Select>
                <Typography variant="p" color={palette.knittingPurple}>
                  {errors.Column?.message}
                </Typography>
                <Typography variant="p" color={palette.knittingPurple}>
                  {errors.Row?.message}
                </Typography>
              </Box>
              <Box textAlign="center">
                <ModalButton type="submit" text="Submit" />
                <ModalButton text="Cancel" />
              </Box>
            </form>
          </Box>
        </>
      </Modal>
    </ThemeProvider>
  );
};
