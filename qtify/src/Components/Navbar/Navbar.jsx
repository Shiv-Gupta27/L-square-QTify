import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import FeedbackForm from "../Dialog/Dialog";
import styles from "./Navbar.module.css";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { useState } from "react";

function Navbar({ searchData }) {

  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <FeedbackForm />
    </nav>
  );
}

export default Navbar;