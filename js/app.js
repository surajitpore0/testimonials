(function () {
    // customers
    let customers = [];

    let index = 0;
    // object constructor function

    function Customer(name, img, text) {
        this.name = name;
        this.img = img;
        this.text = text;
    }

    // create a customers function

    function creatCustomer(name, img, text) {
        // full img
        let fullImg = `./img/customer-${img}.jpg`;

        // create a new customer instance
        const customer = new Customer(name, fullImg, text);

        // add to all custoers
        customers.push(customer);
    }

    creatCustomer(
        "john",
        1,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi mi, fringilla vel scelerisque non, iaculis non est. Etiam elementum placerat purus et congue. Donec dictum, orci et convallis mattis, mauris sapien finibus massa, at luctus velit nunc sit amet felis. Integer luctus eu eros ac viverra. Phasellus vel condimentum ipsum. `
    );

    creatCustomer(
        "petter",
        2,
        `ultricies, purus eros ultricies metus, ac finibus ante dui ac felis. Mauris mattis eu enim in ornare. Vestibulum ac ultricies lacus, a ornare dolor. Curabitur ac libero non augue rutrum mollis a ut odio. Vestibulum at maximus arcu, quis sodales nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
    );

    creatCustomer(
        "Sam",
        3,
        `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent gravida turpis at bibendum accumsan. Sed consequat magna rutrum mattis lobortis. Aliquam viverra felis non dui consectetur dictum. Nulla lectus nisl, eleifend eu nulla eget, rutrum efficitur augue. Nulla dignissim sem sed tortor porttitor tempus. `
    );

    creatCustomer(
        "Ram",
        4,
        `Nulla convallis posuere imperdiet. Sed a massa id tellus volutpat dictum id ac nulla. Aenean mauris arcu, aliquam aliquam sem id, efficitur semper nibh. Quisque at fringilla lorem. Fusce commodo, ipsum et mollis vulputate, enim arcu egestas felis, at condimentum arcu nisl nec elit. Mauris eget rutrum tellus.`
    );
    // console.log(customers);

    document.querySelectorAll(".btn").forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            // console.log(event.target);

            if (event.target.parentElement.classList.contains("prevBtn")) {
                if (index === 0) {
                    index = customers.length;
                }

                index--;
                document.getElementById("customer-img").src =
                    customers[index].img;
                document.getElementById("customer-name").textContent =
                    customers[index].name;
                document.getElementById("customer-text").textContent =
                    customers[index].text;
            }
            if (event.target.parentElement.classList.contains("nextBtn")) {
                if (index === customers.length - 1) {
                    index = -1;
                }

                index++;
                document.getElementById("customer-img").src =
                    customers[index].img;
                document.getElementById("customer-name").textContent =
                    customers[index].name;
                document.getElementById("customer-text").textContent =
                    customers[index].text;
            }
        });
    });
})();
