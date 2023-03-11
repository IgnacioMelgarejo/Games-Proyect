import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postGame, getGender, getAllPlatforms, } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import s from "./CSS/CreateName.module.css"

const CreateGame = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector((state) => state.gender);
    const platforms = useSelector((state) => state.platforms);
    const [error, setError] = useState({});

    const [input, setInput] = useState({
        name: "",
        description: "",
        rating: "",
        released: "",
        img: "",
        platforms: [],
        genres: [],
    });

    useEffect(() => {
        dispatch(getGender());
        dispatch(getAllPlatforms());
    },[dispatch]);

    function validate(input) {
        let error = {};

        if (!input.name) {
            error.name = "Name is required";
        } else if (input.name.length > 50) {
            error.name = "Name is too long";
        }

        if (!input.description) {
            error.description = "Description is required ";
        } else if (input.description.length > 1500) {
            error.description = "Description is too long. (Max = 1500 characters)";
        }

        if (!input.rating) {
            error.rating = "Rating is required";
        } else if (input.rating > 5 || input.rating < 0) {
            error.rating = "Rating must range between 0 to 5";
        }

        if (!input.released) {
            error.released = "Date of release is required";
        } else if (input.released.length < 10) {
            error.released = "Date of release is to long";
        }
        if (!input.img) {
            error.img = "Image URL is required";
        }

        if (!input.genres[0]) {
            error.genres = "Minimun one Genre is required ";
        }

        if (!input.platforms[0]) {
            error.platforms = "Minimun one Platform is required";
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

        console.log(input);
    }

    const handleSelectGenres = (e) => {

        if (!input.genres.includes(e.target.value)) {
            setInput({
                ...input,
                genres: [...input.genres, e.target.value],
            });
            setError(
                validate({
                    ...input,
                    genres: [...input.genres, e.target.value],
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
            genres: input.genres.filter((param) => param !== el),
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.data);

        let crear = {
            name: input.name,
            description: input.description,
            rating: input.rating,
            released: input.released,
            img: input.img,
            platforms: input.platforms.join(", "),
            genres: input.genres.join(", "),
        };

        dispatch(postGame(crear));

        setInput({
            name: "",
            description: "",
            rating: "",
            released: "",
            img: "",
            platforms: [],
            genres: [],
        });

        alert("VideoGame Created");
        history.push("/home");
    }


    return (
        <div >

            <div className={s.div}>
                <Link to="/home">
                    <div><button >BACK HOME</button></div>

                </Link>

                <div className={s.div}>

                    <form className={s.formRegister} onSubmit={(e) => handleSubmit(e)}>
                        <h4 >Crea tu Videojuego</h4>
                        <div>

                            <input
                                className={s.input}
                                type="text"
                                value={input.name}
                                name="name"
                                onChange={handleOnChange}
                                placeholder="Ingrese nombre"
                            />
                            {error.name && <span >{error.name}</span>}
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
                            {error.released && <span>{error.released}</span>}
                        </div>


                        <div className={s.div}>
                            <input
                                className={s.input}
                                type="text"
                                value={input.img}
                                name="img"
                                onChange={handleOnChange}
                                placeholder="Imagen URL"
                            />
                            {error.img && <span >{error.img}</span>}
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
                            {error.rating && <span >{error.rating}</span>}
                        </div>


                        <div className={s.div}>
                            <label>Genres</label><br />
                            <select className={s.dropBotton} onChange={(e) => handleSelectGenres(e)}>
                                <option value="all">All</option>
                                {genres?.map((e) => {
                                    return (
                                        <option key={e.id} value={e.name}>
                                            {e.name}
                                        </option>
                                    );
                                })}
                            </select>
                            {error.genres && <span >{error.genres}</span>}
                        </div>


                        <div className={s.div}>
                            {input.genres?.map((e) => {
                                return (
                                    <>
                                        <div>{e}</div>
                                        <button onClick={() => handleDeleteGenres(e)}>X</button>
                                    </>
                                );
                            })}{" "}
                        </div>


                        <div className={s.div}>
                            <p>Platforms</p>
                            <select className={s.dropBotton} onChange={(e) => handleSelectPlatform(e)}>
                                <option value="all">All</option>
                                {platforms?.map((e) => {
                                    return (
                                        <option key={e.id} value={e.name}>
                                            {e.name}
                                        </option>
                                    );
                                })}
                            </select>
                            {error.platforms && (
                                <span >{error.platforms}</span>
                            )}
                        </div>


                        <div className={s.div}>
                            {input.platforms?.map((e) => {
                                return (
                                    <>
                                        <div>{e}</div>
                                        <button onClick={() => handleDeletePlatforms(e)}>X</button>
                                    </>
                                );
                            })}
                        </div>


                        <div className={s.div}>
                            <textarea className={s.dropBotton}
                                type="text"
                                value={input.description}
                                name="description"
                                onChange={handleOnChange}
                                placeholder="Description"
                            />
                            {error.description && (
                                <span >{error.description}</span>
                            )}
                        </div>

                        {Object.keys(error).length ? (
                            <div >
                                <input className={s.input} type="submit" disabled name="Send" />
                            </div>
                        ) : (
                            <div>
                                <input className={s.input} type="submit" name="Send" />
                            </div>
                        )}
                    </form>
                </div>
            </div>

        </div>
    );
}


export default CreateGame;