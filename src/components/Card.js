import Data from '../data/data'

const cards =() => {
    return(
        <div className="row">
        {Data.map(item => {
            const{id, image, name, hour} = item;
            return(
            <div className="lesson_lesson col col-md-6 col-lg-4" key={id}>
            <div>
              <img src={image} alt="" />
            </div>
            <div className="lesson_text">
              <p className="lesson_parag">
                <span className="lesson_span">Lesson Name :</span>
                {name}
              </p>
              <p className="lesson_parag">
                <span className="lesson_span">Lesson Hour :</span>
                {hour}
              </p>
            </div>
        </div>
            )
        })}
        
    </div>
  )
}    
export default cards