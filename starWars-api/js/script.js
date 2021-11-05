wars = document.getElementById("starWars")

fetch('https://swapi.dev/api/people/')
    .then(res => res.json())

.then(data => {

    if (data) {
        console.log(data)
        const newResult = data['results']
        console.log(newResult)
        for (let result in newResult) {

            let starProfile = newResult[result]
            let { name, gender, height } = starProfile


            wars.innerHTML += `
            <div class="col-md-4 mt-5 mb-4 rounded ">
                <div class="card p-3 border-secondary">
                    <img src="images/star-wars.jpg" class="card-img-top" alt="${name}" height="300" width="auto"/>
                    <div class="card-body">
                        <h5 class="card-title text-center text-uppercase fw-bold p-2">${name}</h5>
                        <div class="text-center">
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#moreDetails${result}">
                            View Details
                          </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Modal -->
            <div class="modal fade " id="moreDetails${result}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-center fw-bold text-primary" id="moreDetailsLabel">PERSONAL INFO</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p><span class="fw-bold">Name:</span> ${name}</p>
                    <p><span class="fw-bold">Gender:</span> ${gender}</p>
                    <p><span class="fw-bold">Height:</span> ${height}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            `
        }
    }


    // let charaterProfile = newResult[result]
    // let { name, gender, height, eye_color } = charaterProfile



});