

const Filter = () => {
  return (
    <div style={{width:"200px"}}>
      <h2>Filter News</h2>
      <p>Language</p>
      <label>
        <input type="radio" />
        <span>English</span>
      </label>
      <br />
      <label>
        <input type="radio" />
        <span>Germany</span>
      </label>
      <br />
      <label>
        <input type="radio" />
        <span>Espanol</span>
      </label>
      <br />
      <label>
        <input type="radio" />
        <span>Italiano</span>
      </label>
      <br />

      <p>Sort By</p>
      <label>
        <input type="radio" />
        <span>Germany</span>
      </label>
      <br />
      <label>
        <input type="radio" />
        <span>Espanol</span>
      </label>
      <br />
      <label>
        <input type="radio" />
        <span>Italiano</span>
      </label>
      <br />


      <button>Filter</button>
      <button>Reset</button>
    </div>
  )
}

export default Filter
