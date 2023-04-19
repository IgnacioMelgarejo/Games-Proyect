import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postGame, getGender, getAllPlatforms, } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import b from "./CSS/Button.module.css"
import s from "./CSS/CreateName.module.css"

const CreateGame = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const gender = useSelector((state) => state.gender);
    const platforms = useSelector((state) => state.platforms);

    const [error, setError] = useState({});

    const [input, setInput] = useState({
        name: "",
        description: "",
        rating: "",
        released: "",
        image: "",
        platforms: [],
        gender: [],
    });

    useEffect(() => {
        dispatch(getGender());
        dispatch(getAllPlatforms());
    }, [dispatch]);

    function validate(input) {
        let error = {};

        if (!input.name) {
            error.name = "Name is required";
        }
        if (input.name.length > 50) {
            error.name = "Name is too long";
        }

        if (!input.description) {
            error.description = "Description is required ";
        }
        if (input.description.length > 1500) {
            error.description = "Description is too long. (Max = 1500 characters)";
        }

        if (!input.rating) {
            error.rating = "Rating is required";
        }
        if (input.rating > 5 || input.rating < 0) {
            error.rating = "Rating must range between 0 to 5";
        }

        if (!input.released) {
            error.released = "Date of release is required";
        }
        if (input.released.length < 10) {
            error.released = "Date of release is to long";
        }
        if (!input.image) {
            error.image = "Image URL is required";
        }

        if (!input.gender[0]) {
            error.gender = "Minimun one Genre is required ";
        }

        if (!input.platforms[0]) {
            error.platforms = "Minimun one Platform is required";
        }
        if (input.image === '' && input.description === '' && input.rating === '' && input.name === '') {
            error.submit = "No se puede enviar el formulario vacio"
        }
        return error;
    }

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );


    }

    const handleSelectGenres = (e) => {

        if (!input.gender.includes(e.target.value)) {
            setInput({
                ...input,
                gender: [...input.gender, e.target.value],
            });
            setError(
                validate({
                    ...input,
                    gender: [...input.gender, e.target.value],
                })
            );
        } else {
            setInput({
                ...input,
            });
        }
    }

    const handleSelectPlatform = (e) => {

        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value],
        });
        setError(
            validate({
                ...input,
                platforms: [...input.platforms, e.target.value],
            })
        );
    }

    const handleDeletePlatforms = (el) => {
        setInput({
            ...input,
            platforms: input.platforms.filter((param) => param !== el),
        });
    }

    const handleDeleteGenres = (el) => {
        setInput({
            ...input,
            gender: input.gender.filter((param) => param !== el),
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        let crear = {
            name: input.name,
            description: input.description,
            rating: input.rating,
            released: input.released,
            image: input.image,
            platforms: input.platforms.join(", "),
            gender: input.gender.join(", "),
        };


        dispatch(postGame(crear));

        setInput({
            name: "",
            description: "",
            rating: "",
            released: "",
            image: "",
            platforms: [],
            gender: [],
        });

        if (input.image === '' && input.description === '' && input.rating === '' && input.name === '') {
            alert("No se puede enviar el formulario vacio")
        } else {
            alert("VideoGame Created");
            history.push("/home");
        }
    }


    return (



        <div className={s.div}>
            <Link to="/home">
                <div className={b.buttonBack}><button >BACK HOME</button></div>

            </Link>

            <form className={s.formRegister} onSubmit={(e) => handleSubmit(e)} >
                <h4 >CREA TU VIDEOJUEGO</h4>
                <div className={s.div}>

                    <input
                        className={s.input}
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={handleOnChange}
                        placeholder="Ingrese nombre"
                    />
                    {error.name && <span className={s.red}>{error.name}</span>}
                </div >


                <div className={s.div}>
                    <input
                        className={s.input}
                        type="date"
                        value={input.released}
                        name="released"
                        onChange={handleOnChange}
                        placeholder="Released"
                    />
                    {error.released && <span className={s.red}>{error.released}</span>}
                </div>


                <div className={s.div}>
                    <input
                        className={s.input}
                        type="text"
                        value={input.image}
                        name="image"
                        onChange={handleOnChange}
                        placeholder="Imagen URL"
                    />
                    {error.image && <span className={s.red}>{error.image}</span>}
                </div>


                <div className={s.div}>
                    <input
                        className={s.input}
                        type="number"
                        value={input.rating}
                        name="rating"
                        onChange={handleOnChange}
                        placeholder="Raiting"
                    />
                    {error.rating && <span className={s.red}>{error.rating}</span>}
                </div>


                <div className={s.div}>
                    <p>GENRES</p>
                    <select className={s.dropBotton} onChange={(e) => handleSelectGenres(e)}>
                        <option value="all">All</option>
                        {gender?.map((g) => {
                            return (
                                <option key={g.id} value={g.name}>
                                    {g.name}
                                </option>
                            );
                        })}
                    </select>
                    {error.gender && <span className={s.red} >{error.gender}</span>}
                </div>



                <div className={s.div}>
                    {input.gender?.map((e) => {
                        return (
                            <div key={e} className={s.dropConteiner}>
                                <div className={s.dropItem} >
                                    {e}{" "}
                                    <button onClick={() => handleDeleteGenres(e)}>X</button>
                                </div>

                            </div>
                        );
                    })}{" "}
                </div>


                <div className={s.div}>
                    <p>PLATFORMS</p>
                    <select className={s.dropBotton} onChange={(e) => handleSelectPlatform(e)}>
                        <option value="all">All</option>
                        {platforms?.map((platform) => {
                            return (
                                <option key={platform.id} value={platform.name}>
                                    {platform.name}
                                </option>
                            );
                        })}{" "}
                    </select>
                    {error.platforms && (
                        <span className={s.red} >{error.platforms}</span>
                    )}
                </div>


                <div className={s.div}>
                    {input.platforms?.map((p) => {
                        return (
                            <div key={p} className={s.dropConteiner}>
                                <div className={s.dropItem} >{p} {" "}
                                    <button onClick={() => handleDeletePlatforms(p)}>X</button>
                                </div>
                            </div>
                        );
                    })}
                </div>


                <div className={s.div}>
                    <textarea
                        className={s.dropBotton}
                        type="text"
                        value={input.description}
                        name="description"
                        onChange={handleOnChange}
                        placeholder="Description"
                    />
                    {error.description && (
                        <span className={s.red}>{error.description}</span>
                    )}
                </div>

                {Object.keys(error).length ? (
                    <div  >
                        <input className={s.inputNoSubmit} type="submit" disabled name="Send" />
                    </div>
                ) : (
                    <div >
                        <input className={s.inputSubmit} type="submit" name="Send" />
                    </div>
                )}
            </form>
        </div>



    );
}


export default CreateGame;