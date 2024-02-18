class Brand {
  id: number;

  img: string;

  brandName: string;

  model: string;

  location: string;

  color: string;

  owners: string;

  manufacture: string;

  transmission: string;

  validupto: string;

  fitments: string;

  kms: string;

  photo?: string;

  constructor(
    id: number,
    img: string,
    brandName: string,
    model: string,
    location: string,
    color: string,
    owners: string,
    manufacture: string,
    transmission: string,
    validupto: string,
    fitments: string,
    kms: string,
    photo: string,
  ) {
    this.id = id;
    this.img = img;
    this.brandName = brandName;
    this.model = model;
    this.location = location;
    this.color = color;
    this.owners = owners;
    this.manufacture = manufacture;
    this.transmission = transmission;
    this.validupto = validupto;
    this.fitments = fitments;
    this.kms = kms;
    this.photo = photo;
  }
}

export default Brand;
