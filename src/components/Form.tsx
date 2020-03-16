import React from 'react';

export const From: React.FC = () => {
    return (
        <form>
            <div className="form-group">
                <input 
                    type="text" 
                    className="from-control"
                    placeholder="Enter name the note"
                />
            </div>
        </form>
    )
}