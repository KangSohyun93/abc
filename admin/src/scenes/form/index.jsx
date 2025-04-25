import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import handleAPI from "~/api/handleAPI";
import Header from "~/components/Header";
import {
  createProductFail,
  createProductStart,
  createProductSuccess,
} from "~/redux/reducer/ProductReducer";

const initialValues = {
  name: "",
  description: "",
  quantity: "",
  price: "",
  discountPrice: "",
  image: null,
  category: null,
  user: null,
};

function FormPage() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleCreateProduct = async (values) => {
    const API = `/api/products/create`;
    dispatch(createProductStart());

    const newData = {
      name: values.name,
      description: values.description,
      quantity: values.quantity,
      price: values.price,
      discountPrice: values.discountPrice,
      image: values.image,
      category: values.category,
      user: user._id,
    };

    try {
      const product = await handleAPI(API, "post", newData);

      dispatch(createProductSuccess(product));

      if (!product) {
        dispatch(createProductFail());
      }
    } catch (error) {
      console.log(error);
      dispatch(createProductFail());
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const category = await handleAPI(`/api/categories`);
        if (category) {
          setCategories(category);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <Box m="20px">
      <Box sx={{ p: "0 1rem 0 0", mb: "1rem" }}>
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
      </Box>
      <Formik onSubmit={handleCreateProduct} initialValues={initialValues}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Discount Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.discountPrice}
                name="discountPrice"
                error={!!touched.discountPrice && !!errors.discountPrice}
                helperText={touched.discountPrice && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Button variant="contained" component="label">
              Upload File
              <input
                type="file"
                hidden
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue("image", file); // Cập nhật vào Formik
                }}
              />
            </Button>

            <div>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={categories}
                  onChange={handleChange}
                  autoWidth
                  label="Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default FormPage;
