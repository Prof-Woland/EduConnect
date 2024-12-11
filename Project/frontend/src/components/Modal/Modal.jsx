import React from 'react';
import {createPortal} from 'react-dom'
import { useRef, useEffect } from 'react'
import CoursePage from '../CoursePage/CoursePage'
import './Modal.css'

export default function Modal({ isOpen, onClose, children }){
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };