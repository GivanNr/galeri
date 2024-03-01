import Foto from "../models/FotoModel.js";
import path from "path";
import fs from 'fs';

// Controller Foto

export const getFoto = async (req, res) => {
    try {
        const response = await Foto.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export const getFotoById = async (req, res) => {
    try {
        const response = await Foto.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

// POST PENGADUAN

export const saveFoto = async (req, res) => {
    try {
        if (!req.files || !req.files.foto) {
            return res.status(400).json({ msg: "Foto Kosong" });
        }

        const tgl_foto = req.body.tgl_foto;
        const id = req.body.id;
        const deskripsi = req.body.deskripsi;
        

        const file = req.files.foto;
        const ext = path.extname(file.name);
        const fileName = `${file.md5}${ext}`;
        console.log('fileName', fileName)
        const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

        const allowedTypes = ['.jpg', '.png', '.jpeg'];
        if (!allowedTypes.includes(ext.toLowerCase())) {
            return res.status(422).json({ msg: "Invalid Image Type" });
        }

        file.mv(`./public/images/${fileName}`, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ msg: "Internal Server Error" });
            }

            try {
                await Foto.create({ tgl_foto, id, foto: fileName, url: url, deskripsi: deskripsi,  });
                res.status(201).json({ msg: "Foto diupload" });
            } catch (error) {
                console.log(error);
                res.status(500).json({ msg: "Foto gagal diupload" });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

// UPDATE PENGADUAN

export const updateFoto = async (req, res) => {
    try {
        const foto = await Foto.findOne({ where: { id: req.params.id } });
        if (!foto) {
            return res.status(404).json({ msg: "Data tidak ada" });
        }

        const tgl_foto = req.body.tgl_foto;
        const id = req.body.id;
        const deskripsi = req.body.deskripsi;

        await foto.update({ tgl_foto, id, deskripsi: deskripsi });
        res.status(200).json({ msg: "Foto Berhasil Diedit" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Gagal mengedit foto" });
    }
}

// DELETE PENGADUAN

export const deleteFoto= async (req, res) => {
    try {
        const foto = await Foto.findOne({ where: { id: req.params.id } });
        if (!foto) {
            return res.status(404).json({ msg: "Tidak Ada Data" });
        }

        const filepath = `./public/images/${path.basename(foto.foto)}`;
        fs.unlinkSync(filepath);

        await foto.destroy();
        res.status(200).json({ msg: "Foto Berhasil Dihapus" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}
