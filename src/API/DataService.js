import axios from "axios";
import { Component } from "react";

export class DataService extends Component {
  static async getAll() {
    return await axios.get('http://164.90.161.80:3000/api/content');
  }
  static async getAllById(dirId) {
    return await axios.get('http://164.90.161.80:3000/api/content', {
      params: {
        dirId
      }
    });
  }
}