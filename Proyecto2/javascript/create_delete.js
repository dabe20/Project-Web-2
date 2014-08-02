function eliminarElemento(id_elemento, id_delete, id_edit){
		elementoEliminar = document.getElementById(id_elemento);
		delete_eliminar = document.getElementById(id_delete);
		edit_eliminar = document.getElementById(id_edit);
		if (elementoEliminar && id_delete && id_edit){
			elementoPadre = elementoEliminar.parentNode;
			elementoPadre.removeChild(elementoEliminar);
			
			elementoPadreDelete = delete_eliminar.parentNode;
			elementoPadreDelete.removeChild(delete_eliminar);

			elementoPadreEdit = edit_eliminar.parentNode;
			elementoPadreEdit.removeChild(edit_eliminar);
			alert("Eliminado correctamente.");
		} else {
			alert("El elemento selecionado no existe, \nno se pudo eliminar.");
		}
	}