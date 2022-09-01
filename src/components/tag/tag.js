import React from "react";
import './tag.scss';

export default function Tag(props) {
    return (
        <span className="tag">{props.content}</span>
    );
};

