import React, { useState } from "react";
import "./RaT.css";

export default function RaT({ ticket }) {
  const EDITMODE = ticket && ticket._id !== "new";

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
    queries: [""],
  };

  if (EDITMODE) {
    startingTicketData.title = ticket.title;
    startingTicketData.description = ticket.description;
    startingTicketData.priority = ticket.priority;
    startingTicketData.progress = ticket.progress;
    startingTicketData.status = ticket.status;
    startingTicketData.category = ticket.category;
    startingTicketData.queries = ticket.queries || [""];
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleQueryChange = (index, value) => {
    const newQueries = [...formData.queries];
    newQueries[index] = value;
    setFormData((prevState) => ({
      ...prevState,
      queries: newQueries,
    }));
  };

  const addQueryField = () => {
    setFormData((prevState) => ({
      ...prevState,
      queries: [...prevState.queries, ""],
    }));
  };

  const removeQueryField = (index) => {
    const newQueries = [...formData.queries];
    newQueries.splice(index, 1);
    setFormData((prevState) => ({
      ...prevState,
      queries: newQueries,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  if (!ticket) {
    return <div class='error'>Error: No ticket data provided</div>;
  }

  return (
    <div className="form-container">
      <form className="ticket-form" onSubmit={handleSubmit}>
        <h3>{EDITMODE ? "Update your Ticket" : "Create Your Ticket"}</h3>
        <label>Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required
          value={formData.title}
        />
        <label>Description: </label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows="5"
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label>Priority</label>
        <div>
          {[1, 2, 3, 4, 5].map((level) => (
            <label key={level}>
              <input
                type="radio"
                name="priority"
                onChange={handleChange}
                value={level}
                checked={formData.priority === level}
              />
              {level}
            </label>
          ))}
        </div>
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <label>Queries:</label>
        {formData.queries.map((query, index) => (
          <div key={index} className="query-container">
            <textarea
              value={query}
              onChange={(e) => handleQueryChange(index, e.target.value)}
              required
              rows="2"
            ></textarea>
            {formData.queries.length > 1 && (
              <button
                type="button"
                onClick={() => removeQueryField(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addQueryField}>
          Add Another Query
        </button>
        <input
          type="submit"
          className="btn"
          value={EDITMODE ? "Update your Ticket" : "Create Your Ticket"}
        />
      </form>
    </div>
  );
}
