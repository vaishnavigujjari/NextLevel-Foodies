import React from 'react';
import classes from './loading.module.css'

export default function MealsLoading() {
  return (
    <p className={classes.loading}>Hang tight! Fetching those amazing meals for you.</p>
  )
}